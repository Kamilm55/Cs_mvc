using System.ComponentModel.DataAnnotations;

namespace Online_Learning_Management_Sysytem_MVC.DTO;

public class RegisterDTO
{
    [Required,MinLength(6)]
    public string Username { get; set; }
    [Required,MinLength(6),EmailAddress]
    public string Email { get; set; }
    [Required,MinLength(6)]
    public string Password { get; set; }
}