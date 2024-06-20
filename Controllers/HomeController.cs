using Microsoft.AspNetCore.Mvc;
using Online_Learning_Management_Sysytem_MVC;
using System.Diagnostics;
using Online_Learning_Management_Sysytem_MVC.Repository;

namespace Online_Learning_Management_Sysytem_MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUserRepository _userRepository;
        private readonly ICourseRepository _courseRepository;

        public HomeController(ILogger<HomeController> logger, ICourseRepository courseRepository, IUserRepository userRepository)
        {
            _logger = logger;
            _userRepository = userRepository;
            _courseRepository = courseRepository;
        }

        public IActionResult Index()
        {
            // Fetch data from the repository
            var courses = _courseRepository.GetAll();//replace to getAllCourses not users
            return View(courses);
        }

        // Action to show details of a specific course
        public IActionResult CourseDetails(long id)
        {
            // Normally, you would retrieve the course from a database
            var course = _courseRepository.GetById(id);
           
            if (course == null)
            {
                return NotFound();
            }

            return View(course);
        }


        // Error

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

       
        }
    }
