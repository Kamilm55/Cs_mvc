namespace Online_Learning_Management_Sysytem_MVC.CustomException;

public class InvalidRegisterException: Exception
{
    public InvalidRegisterException(string message) : base(message)
    {
    }
    
}