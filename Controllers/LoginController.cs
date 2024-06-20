using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Online_Learning_Management_Sysytem_MVC.CustomException;
using Online_Learning_Management_Sysytem_MVC.DTO;
using Online_Learning_Management_Sysytem_MVC.Repository;

namespace Online_Learning_Management_Sysytem_MVC.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;
        private readonly IUserRepository _userRepository;

        public LoginController(ILogger<LoginController> logger,IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _logger = logger;
        }
        
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult Index(LoginDTO loginDto)
        {
           _logger.LogInformation("login works");
            try
            {
                if (ModelState.IsValid)
                {
                    // Validate the login credentials (this is just a placeholder)
                    User authenticatedUser = _userRepository.ValidateStudent(loginDto);

                    if (authenticatedUser!=null)
                    {
                        _logger.LogInformation(authenticatedUser.ToString());
                        // If login is successful, set session variables and redirect to Home
                        HttpContext.Session.SetString("UserID",authenticatedUser.UserID.ToString());
                        HttpContext.Session.SetString("Username",authenticatedUser.Username);
                        HttpContext.Session.SetString("Email",authenticatedUser.Email);
                        HttpContext.Session.SetString("Role",authenticatedUser.Role);
                  
                        HttpContext.Session.SetString("PhotoUrl",authenticatedUser.Photo);
                    
                        return RedirectToAction("Index", "Home");
                    }

                    return View(loginDto);

                }
            }
            catch (InvalidLoginException ex)
            {
                TempData["ErrorMessage"] = ex.Message;
            }
            return View(loginDto); // Return the view with the model state errors
        }
       
        [HttpGet]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            
            // Prevent caching of the logout page
            //Response.Headers["Cache-Control"] = "no-cache, no-store";
            //Response.Headers["Pragma"] = "no-cache";
           //Response.Headers["Expires"] = "-1";
            
            return RedirectToAction("Index", "Login");
        }
    }
}
