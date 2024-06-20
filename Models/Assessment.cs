    namespace Online_Learning_Management_Sysytem_MVC;

    public class Assessment
    {
        public Assessment()
        {
        }

        public long? AssessmentID { get; set; }
        public long? EnrollmentID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Answer { get; set; }
        public string Grade { get; set; }
        public string Status { get; set; }
        public string Photo { get; set; }
        
        public virtual Enrollment Enrollment { get; set; }
    }
