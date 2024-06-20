using System.ComponentModel.DataAnnotations;

namespace Online_Learning_Management_Sysytem_MVC.DTO;

public class ProfileViewModel
{
    public long UserID { get; set; }
    [Required,MinLength(6)]
    public string Username { get; set; }
    [EmailAddress]
    [Required,MinLength(6)]
    public string Email { get; set; }
    public string Role { get; set; }
    [Required]
    public IFormFile Photo { get; set; }
    
    public string PhotoUrl { get; set; }
}