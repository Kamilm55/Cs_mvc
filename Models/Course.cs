using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Online_Learning_Management_Sysytem_MVC
{
    public class Course
    {
        public Course()
        {
            this.Assessments = new HashSet<Assessment>();
            this.Enrollments = new HashSet<Enrollment>();
            this.CourseArticles = new List<Course_Article>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long? CourseID { get; set; }
        public long? InstructorID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        //public long StudentId { get; set; } it exists inside enrollment

        public ICollection<Assessment> Assessments { get; set; }        
        public ICollection<Enrollment> Enrollments { get; set; }
        public List<Course_Article> CourseArticles { get; set; } = new List<Course_Article>() ;
        
        public virtual User Instructor { get; set; }
    }
}
