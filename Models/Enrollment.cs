namespace Online_Learning_Management_Sysytem_MVC
{
    public class Enrollment
    {
        public long? EnrollmentID { get; set; }
        public long? StudentID { get; set; }
        public long CourseID { get; set; }
        public DateTime EnrollmentDate { get; set; }
        
        public virtual User Student { get; set; }
        public virtual Course Course { get; set; }
    }
}
