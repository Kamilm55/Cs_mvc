using System.ComponentModel.DataAnnotations;

namespace Online_Learning_Management_Sysytem_MVC.DTO;

public class CourseArticleDTO
{
    //[Required]
    //public long CourseID { get; set; }
    [Required(ErrorMessage = "Title is required")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Content is required")]
    public string Content { get; set; }

    [Required(ErrorMessage = "Video URL is required")]
    public string Video { get; set; }
}