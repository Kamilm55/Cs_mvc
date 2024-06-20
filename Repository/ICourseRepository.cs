namespace Online_Learning_Management_Sysytem_MVC.Repository;

public interface ICourseRepository
{
    List<Course> GetAll();
    Course GetById(long id);
}