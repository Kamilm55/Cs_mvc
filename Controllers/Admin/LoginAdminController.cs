using Microsoft.AspNetCore.Mvc;
using Online_Learning_Management_Sysytem_MVC.CustomException;
using Online_Learning_Management_Sysytem_MVC.DTO;
using Online_Learning_Management_Sysytem_MVC.Repository;

namespace Online_Learning_Management_Sysytem_MVC.Controllers;

public class LoginAdminController : Controller
{
    private readonly ILogger<LoginController> _logger;
    private readonly IUserRepository _userRepository;

    public LoginAdminController(ILogger<LoginController> logger,IUserRepository userRepository)
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
           
        try
        {
            if (ModelState.IsValid)
            {
                // Validate the login credentials (this is just a placeholder)
                User authenticatedUser = _userRepository.ValidateAdmin(loginDto);

                if (authenticatedUser!=null)
                {
                    // If login is successful, set session variables and redirect to Home
                    HttpContext.Session.SetString("UserID",authenticatedUser.UserID.ToString());
                    HttpContext.Session.SetString("Username",authenticatedUser.Username);
                    HttpContext.Session.SetString("Email",authenticatedUser.Email);
                    HttpContext.Session.SetString("Role",authenticatedUser.Role);
                  
                    HttpContext.Session.SetString("Photo",authenticatedUser.Photo);
                    
                    return RedirectToAction("Index", "HomeAdmin");
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
}