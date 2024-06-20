namespace Online_Learning_Management_Sysytem_MVC.Repository;

public class CourseRepository : ICourseRepository
{
    private readonly ApplicationDbContext _dbContext;

    public CourseRepository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<Course> GetAll()
    {
        var courses = _dbContext.Courses.ToList();
        return courses;
    }

    public Course GetById(long id)
    {
        var course = _dbContext.Courses.Find(id);

        if (course!=null)
        {
            return course;
        }

        throw new System.Exception("Course not found with id:" + id);
    }
}