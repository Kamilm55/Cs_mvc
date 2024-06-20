using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Online_Learning_Management_Sysytem_MVC.CustomException;
using Online_Learning_Management_Sysytem_MVC.DTO;

namespace Online_Learning_Management_Sysytem_MVC.Repository;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IWebHostEnvironment _hostingEnvironment;
    private readonly ILogger<UserRepository> _logger;

    public UserRepository(ApplicationDbContext dbContext, IWebHostEnvironment hostingEnvironment, ILogger<UserRepository> logger)
    {
        _dbContext = dbContext;
        _hostingEnvironment = hostingEnvironment;
        _logger = logger;
    }
    public User ValidateStudent(LoginDTO loginDto)
    {
       return ValidateUserForRole(loginDto,"Student");
    }

    public void CreateStudent(RegisterDTO registerDto)
    {
        createUserForRole(registerDto, "Student");
    }

    

    public User ValidateInstructor(LoginDTO loginDto)
    {
        return ValidateUserForRole(loginDto,"Instructor");
        
    }

    public void CreateInstructor(RegisterDTO registerDto)
    {
        createUserForRole(registerDto, "Instructor");   
    }

    public User ValidateAdmin(LoginDTO loginDto)
    {
     return ValidateUserForRole(loginDto, "Admin");
    }
 public void UpdateUser(ProfileViewModel profileViewModel, string password)
{
    _logger.LogInformation("Start updating user.");

    ValidateEmail(profileViewModel.UserID, profileViewModel.Email);
    ValidateUsername(profileViewModel.UserID, profileViewModel.Username);

    var user = _dbContext.Users.Find(profileViewModel.UserID);
    if (user == null)
    {
        throw new InvalidOperationException("User not found.");
    }

    user.Email = profileViewModel.Email;
    user.Username = profileViewModel.Username;
    user.Password = password;
    user.Role = profileViewModel.Role;

    if (profileViewModel.Photo != null)
    {
        user.Photo = HandleFileUpload(profileViewModel.Photo);
    }

    _dbContext.Users.Update(user);
    _dbContext.SaveChanges();

    _logger.LogInformation("User updated successfully.");
}

private void ValidateEmail(long userId, string email)
{
    if (IsEmailTakenExceptCurrent(userId, email))
    {
        throw new InvalidOperationException($"The email '{email}' is already taken by another user.");
    }
}

private void ValidateUsername(long userId, string username)
{
    if (IsUsernameTakenExceptCurrent(userId, username))
    {
        throw new InvalidOperationException($"The username '{username}' is already taken by another user.");
    }
}

private string HandleFileUpload(IFormFile photo)
{
    try
    {
        string newFileName = DateTime.Now.ToString("MM-dd-yyyy_HH-mm-ss-fff") + Path.GetExtension(photo.FileName);
        string uploadsFolder = Path.Combine(_hostingEnvironment.WebRootPath, "files");

        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }

        string filePath = Path.Combine(uploadsFolder, newFileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            photo.CopyTo(stream);
        }

        return "/files/" + newFileName;
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "File upload failed.");
        throw new InvalidOperationException("An error occurred while uploading the file.");
    }
}


    private bool IsEmailTakenExceptCurrent(long? userId, string email)
    {
        return _dbContext.Users.Any(u => u.Email == email && u.UserID != userId);
    }
    private bool IsUsernameTakenExceptCurrent(long? userId, string username)
    {
        return _dbContext.Users.Any(u => u.Username == username && u.UserID != userId);
    }



    private User ValidateUserForRole(LoginDTO loginDto, String role)
    {
        User? user = _dbContext.Users.SingleOrDefault(u => u.Email==loginDto.Email);

        if (user!=null)
        {
            if (user.Password!=loginDto.Password)
            {
                throw new InvalidLoginException("Password does not match to email.");
            }

            if (!user.Role.Equals(role))
            {
                throw new InvalidLoginException("User has no " + role +" role. User role is " +user.Role);
            }

            return user;
        }

        throw new InvalidLoginException("There is no user with email:" + loginDto.Email);
        
    }
    private void createUserForRole(RegisterDTO registerDto, string role)
{
    // Check if there is already a user with the same email
    User existingUserByEmail = _dbContext.Users.SingleOrDefault(u => u.Email == registerDto.Email);
    if (existingUserByEmail != null)
    {
        throw new InvalidRegisterException($"There is already a user with email: {registerDto.Email}");
    }

    // Check if there is already a user with the same username
    bool doesUsernameExist = _dbContext.Users.Any(u => u.Username == registerDto.Username);
    if (doesUsernameExist)
    {
        throw new InvalidRegisterException($"There is already a user with username: {registerDto.Username}");
    }

    // Create a new User object
    User newUser = new User
    {
        Role = role,
        Email = registerDto.Email,
        Username = registerDto.Username,
        Password = registerDto.Password,
        Photo = ""
            
        // Set other properties like photo if necessary
    };

    // Add the new user to the Users DbSet and save changes
    _dbContext.Users.Add(newUser);
    _dbContext.SaveChanges();
       

    //return newUser;
}
}
//

