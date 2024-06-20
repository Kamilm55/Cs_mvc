using Microsoft.AspNetCore.Mvc;
using Online_Learning_Management_Sysytem_MVC.CustomException;
using Online_Learning_Management_Sysytem_MVC.DTO;
using Online_Learning_Management_Sysytem_MVC.Repository;

namespace Online_Learning_Management_Sysytem_MVC.Controllers
{
    public class RegisterController : Controller
    {
        private readonly ILogger<LoginController> _logger;
        private readonly IUserRepository _userRepository;
        private readonly ApplicationDbContext _dbContext;

        public RegisterController(ILogger<LoginController> logger,IUserRepository userRepository , ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            _userRepository = userRepository;
            _logger = logger;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult Index(RegisterDTO registerDto)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // Validate the login credentials (this is just a placeholder)
                    _userRepository.CreateStudent(registerDto);

                    User? createdUser = _dbContext.Users.SingleOrDefault(u=>u.Email == registerDto.Email);
                    
                    if (createdUser!=null)
                    {
                        // If login is successful, set session variables and redirect to Home
                        HttpContext.Session.SetString("UserID",createdUser.UserID.ToString());
                        HttpContext.Session.SetString("Username",createdUser.Username);
                        HttpContext.Session.SetString("Email",createdUser.Email);
                        HttpContext.Session.SetString("Role",createdUser.Role);
                  
                        HttpContext.Session.SetString("Photo",createdUser.Photo);
                    
                        return RedirectToAction("Index", "Home");
                    }

                    return View(registerDto);

                }
            }
            catch (InvalidRegisterException ex)
            {
                TempData["ErrorMessage"] = ex.Message;
            }
            return View(registerDto); // Return the view with the model state errors
        }
    }
}
