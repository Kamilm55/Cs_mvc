using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Learning_Management_Sysytem_MVC.DTO;
using Online_Learning_Management_Sysytem_MVC.Repository;

namespace Online_Learning_Management_Sysytem_MVC.Controllers;

public class HomeInstructorController : Controller
{
    private readonly ILogger<HomeInstructorController> _logger;
    private readonly ICourseRepository _courseRepository;
    private readonly ApplicationDbContext _dbContext;

    public HomeInstructorController(ILogger<HomeInstructorController> logger,ICourseRepository courseRepository, ApplicationDbContext dbContext)
    {
        _courseRepository = courseRepository;
        _dbContext = dbContext;
        _logger = logger;
    }
    // GET
    [HttpGet]
    public IActionResult Index()
    {
        long userIdFromSession = long.Parse(HttpContext.Session.GetString("UserID"));
        List<Course> coursesForThisInstructor = _dbContext.Courses
            .Where(c => c.InstructorID == userIdFromSession)
            .ToList();
        
        return View(coursesForThisInstructor);
    }

    [HttpGet]
    public ActionResult Create()
    {
        var model = new CourseDTO
        {
            Articles = new List<CourseArticleDTO>()
        };
        return View(model);
    }

    // POST: /HomeInstructor/Create
    [HttpPost]
    [ValidateAntiForgeryToken] // The [ValidateAntiForgeryToken] attribute in ASP.NET MVC is used to help protect your application against Cross-Site Request Forgery (CSRF) attacks
    public ActionResult Create(CourseDTO courseDto)
    {
        string userIdFromSession = HttpContext.Session.GetString("UserID");
        User InstructorFromDB = _dbContext.Users.Find(long.Parse(userIdFromSession));
            
        if (ModelState.IsValid)
        {
            _logger.LogInformation("Works and valid");
            try
            {
                // Map DTO to entity
                var course = new Course
                {
                    InstructorID = InstructorFromDB.UserID,
                    Instructor = InstructorFromDB,
                    Title = courseDto.Title,
                    Description = courseDto.Description,
                    Photo = courseDto.Photo,
                    CourseArticles = courseDto.Articles?.Select(a => new Course_Article()
                    {
                        Title = a.Title,
                        Content = a.Content,
                        Video = a.Video
                    }).ToList()
                };

                // Add course to database
                _dbContext.Courses.Add(course);
                _dbContext.SaveChanges();

                return RedirectToAction("Index"); // Redirect to action after successful creation
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", $"Error: {ex.Message}");
            }
        }
        LogModelStateErrors();

        return View(courseDto); // Return the view with validation errors if ModelState is not valid
    }
    private void LogModelStateErrors()
    {
        foreach (var state in ModelState)
        {
            foreach (var error in state.Value.Errors)
            {
                _logger.LogInformation($"Property: {state.Key}, Error: {error.ErrorMessage}");
            }
        }

        _logger.LogInformation("ModelState is not valid.");
    }

    // GET: /HomeInstructor/JoinedUsers
    [HttpGet]
    public IActionResult JoinedUsers()
    {
     long userIdFromSession = long.Parse(HttpContext.Session.GetString("UserID"));
        List<Course> coursesForThisInstructor = _dbContext.Courses
            .Where(c => c.InstructorID == userIdFromSession)
            .ToList();

        var usersFromEnrollments = new List<User>();
        
        foreach (var course in coursesForThisInstructor)
        {
            _logger.LogInformation(course.CourseID.ToString());
            // Retrieve users who have joined the specified course
             usersFromEnrollments = _dbContext.Enrollments
                .Where(e => e.CourseID == course.CourseID)
                .Select(e => e.Student)
                .ToList();
           
        }
        _logger.LogInformation(usersFromEnrollments.ToString());
        
        
        return View(usersFromEnrollments); // Assuming you have a corresponding view for displaying course details
    }
    
    // GET: /HomeInstructor/CourseDetails/{id}
    [HttpGet]
    public IActionResult CourseDetails(int id)
    {
        var course = _dbContext.Courses.FirstOrDefault(c => c.CourseID == id);
        if (course == null)
        {
            return NotFound(); // Handle case where course with specified id is not found
        }

        return View(course); // Assuming you have a corresponding view for displaying course details
    }

    // GET: /Home/Delete/{id}
    public IActionResult Delete(int id)
    {
        var course = _dbContext.Courses
            .Include(c => c.Enrollments) // Ensure Enrollments are loaded
            .FirstOrDefault(c => c.CourseID == id);

        if (course == null)
        {
            return NotFound(); // Handle case where course with specified id is not found
        }

        // Remove all enrollments first
        _dbContext.Enrollments.RemoveRange(course.Enrollments);

        // Now, remove the course itself
        _dbContext.Courses.Remove(course);

        // Save changes to the database
        _dbContext.SaveChanges();

        return RedirectToAction("Index"); // Redirect to a different action after deletion, e.g., Index action
    }
    
    // GET: /HomeInstructor/Edit/{id}
    public IActionResult Edit(int id)
    {
        var course = _dbContext.Courses.FirstOrDefault(c => c.CourseID == id);
        if (course == null)
        {
            return NotFound(); // Handle case where course with specified id is not found
        }

        return View(course); // Assuming you have a corresponding view for editing course details
    }

// POST: /HomeInstructor/Edit/{id}
    [HttpPost]
    public IActionResult Edit(int id, Course course)
    {
        if (id != course.CourseID)
        {
            return BadRequest(); // Handle mismatched id and course id
        }

        long userIdFromSession = long.Parse(HttpContext.Session.GetString("UserID"));
        course.InstructorID = userIdFromSession;
        _dbContext.Entry(course).State = EntityState.Modified;
        _dbContext.SaveChanges();

        return RedirectToAction("Index"); // Redirect to a different action after editing, e.g., Index action
    }

}