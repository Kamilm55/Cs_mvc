using Microsoft.EntityFrameworkCore;

namespace Online_Learning_Management_Sysytem_MVC
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Assessment> Assessments { get; set; }
        // Other DbSets for Assessment, Enrollment, Course_Article, etc.

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // User entity configuration
            modelBuilder.Entity<User>()
                .ToTable("User") // Optionally, specify table name
                .HasKey(u => u.UserID); // Specify the primary key

            modelBuilder.Entity<User>()
            .Property(u => u.UserID)
            .ValueGeneratedOnAdd(); // This specifies auto-increment
            
            modelBuilder.Entity<User>()
                .Property(u => u.Email)
                .IsRequired(); // Make the Email property required

            modelBuilder.Entity<User>()
                .Property(u => u.Photo)
                .IsRequired(false); // Make the Photo property optional

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique(); // Make the Username property unique

            // Course entity configuration
            modelBuilder.Entity<Course>()
                .ToTable("Course")
                .HasKey(c => c.CourseID); // Specify the primary key
            modelBuilder.Entity<Course>()
                .Property(c => c.CourseID)
                .ValueGeneratedOnAdd(); // This specifies auto-increment

            modelBuilder.Entity<Course>()
                .Property(c => c.Title)
                .IsRequired(); // Make the Title property required

            modelBuilder.Entity<Course>()
                .Property(c => c.Description)
                .IsRequired(false); // Make the Description property optional

            modelBuilder.Entity<Course>()
                .Property(c => c.Photo)
                .IsRequired(false); // Make the Photo property optional

            // Configure the foreign key relationship with User (Instructor)
            modelBuilder.Entity<Course>()
                .HasOne(c => c.Instructor)
                .WithMany()
                .HasForeignKey(c => c.InstructorID)
                .OnDelete(DeleteBehavior.Cascade); // Cascade delete behavior

            // Enrollment entity configuration
            modelBuilder.Entity<Enrollment>()
                .ToTable("Enrollment")
                .HasKey(e => e.EnrollmentID); // Specify the primary key

            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Student)
                .WithMany()
                .HasForeignKey(e => e.StudentID)
                .OnDelete(DeleteBehavior.Cascade); // Configure delete behavior

            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Course)
                .WithMany(c => c.Enrollments)
                .HasForeignKey(e => e.CourseID)
                .OnDelete(DeleteBehavior.SetNull); // Configure delete behavior

            // Assessment entity configuration
            modelBuilder.Entity<Assessment>()
                .ToTable("Assessment")
                .HasKey(a => a.AssessmentID); // Specify the primary key

            modelBuilder.Entity<Assessment>()
                .Property(a => a.Photo)
                .IsRequired(false);
            
            modelBuilder.Entity<Assessment>()
                .Property(a => a.Answer)
                .IsRequired(false);
            
            modelBuilder.Entity<Assessment>()
                .Property(a => a.Grade)
                .IsRequired(false);
            
            modelBuilder.Entity<Assessment>()
                .HasOne(a => a.Enrollment)
                .WithMany()
                .HasForeignKey(a => a.EnrollmentID)
                .OnDelete(DeleteBehavior.Restrict); // Configure delete behavior
            
            // Course_Article entity configuration
            modelBuilder.Entity<Course>()
                .OwnsMany(c => c.CourseArticles)
                .WithOwner(); // Configure the CourseArticles as an owned entity
        }
    }
}
