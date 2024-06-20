using Online_Learning_Management_Sysytem_MVC.DTO;

namespace Online_Learning_Management_Sysytem_MVC.Repository;

public interface IUserRepository
{
    User ValidateStudent(LoginDTO loginDto);
    void CreateStudent(RegisterDTO registerDto);
    User ValidateInstructor(LoginDTO loginDto);
    void CreateInstructor(RegisterDTO registerDto);
    User ValidateAdmin(LoginDTO loginDto);
    void UpdateUser(ProfileViewModel profileViewModel, string password);
}