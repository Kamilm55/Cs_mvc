using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Online_Learning_Management_Sysytem_MVC.DTO;
using Online_Learning_Management_Sysytem_MVC.Repository;

namespace Online_Learning_Management_Sysytem_MVC.Controllers
{
    public class ProfileController : Controller
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IUserRepository _userRepository;
        private readonly IWebHostEnvironment _hostingEnvironment;
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(ApplicationDbContext dbContext, IUserRepository userRepository, IWebHostEnvironment hostingEnvironment, ILogger<ProfileController> logger)
        {
            _dbContext = dbContext;
            _userRepository = userRepository;
            _hostingEnvironment = hostingEnvironment;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            //_logger.LogInformation("get photo url in HTTPGET -> " +  HttpContext.Session.GetString("PhotoUrl"));
            var profileViewModel = new ProfileViewModel
            {
                UserID = long.Parse(HttpContext.Session.GetString("UserID")),
                Username = HttpContext.Session.GetString("Username"),
                Email = HttpContext.Session.GetString("Email"),
                Role = HttpContext.Session.GetString("Role"),
                PhotoUrl = HttpContext.Session.GetString("PhotoUrl")
               // Photo = HttpContext.Session.GetString("Photo")
            };

            return View(profileViewModel);
        }
     
    [HttpPost]
    public IActionResult Index(ProfileViewModel model)
    {
        var sessionId = HttpContext.Session.GetString("UserID");
        _logger.LogInformation("Session user ID in POST: " + sessionId);

        if (sessionId == null)
        {
            throw new InvalidOperationException("There is no ID in session");
        }

        User currentUser = _dbContext.Users.Find(long.Parse(sessionId));

        if (ModelState.IsValid)
        {
            if (model.Photo != null && model.Photo.Length > 0)
            {
                // Process uploaded file
                _logger.LogInformation("Model photo is null");
                _logger.LogInformation(model.Photo.FileName);
            }
            else
            {
                // Handle case where no file was uploaded
                _logger.LogInformation("Model photo is not null");
            }
            try
            {
                string filePath = HandleFileUpload(model);

                if (filePath == null)
                {
                    UpdateUserProfile(model,currentUser,currentUser.Photo);
                }
                else
                {
                    UpdateUserProfile(model, currentUser, filePath);
                }

                UpdateSession(model);

                TempData["ErrorMessage"] = null;
                TempData["SuccessMessage"] = "Profile updated successfully!";
            }
            catch (InvalidOperationException ex)
            {
                _logger.LogError(ex, "An error occurred while updating the profile");
                TempData["SuccessMessage"] = null;
                TempData["ErrorMessage"] = ex.Message;
                return View(model);
            }

            return RedirectToAction("Index");
        }

        LogModelStateErrors();
        return View(model);
    }

    private string HandleFileUpload(ProfileViewModel model)
    {
        if (model.Photo == null)
        {
            _logger.LogInformation("Model photo is null");
            return null;
        }

        _logger.LogInformation("Model photo is not null");
        var fileName = DateTime.Now.ToString("MM-dd-yyyy_HH-mm-ss-fff") + Path.GetExtension(model.Photo.FileName);
        var filePath = Path.Combine(_hostingEnvironment.WebRootPath, "files", fileName);

        if (!Directory.Exists(Path.Combine(_hostingEnvironment.WebRootPath, "files")))
        {
            Directory.CreateDirectory(Path.Combine(_hostingEnvironment.WebRootPath, "files"));
        }

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            model.Photo.CopyTo(stream);
        }

        model.PhotoUrl = "/files/" + fileName; 
        //_logger.LogInformation("Photo uploaded to: " + filePath);

        return filePath;
    }

    private void UpdateUserProfile(ProfileViewModel model, User currentUser, string filePath)
    {
        _userRepository.UpdateUser(model, currentUser.Password);

        if (filePath != null)
        {
            model.PhotoUrl = "/files/" + Path.GetFileName(filePath);
        }
    }

    private void UpdateSession(ProfileViewModel model)
    {
        HttpContext.Session.SetString("Username", model.Username);
        HttpContext.Session.SetString("Email", model.Email);
        HttpContext.Session.SetString("PhotoUrl", model.PhotoUrl);

       // _logger.LogInformation("Session photo url updated to -> " + model.PhotoUrl);
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

        
    }

}
