using System.ComponentModel.DataAnnotations;

namespace Online_Learning_Management_Sysytem_MVC.DTO;

public class CourseDTO
{
    [Required,MinLength(3)]
    public string Title { get; set; }
    [Required,MinLength(3)]
    public string Description { get; set; }
    [Required]
    public string Photo { get; set; } // iFormFile
    
    // Navigation property to Course_Article
    [Required]
    public List<CourseArticleDTO> Articles { get; set; } = new List<CourseArticleDTO>();
}