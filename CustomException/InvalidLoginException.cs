namespace Online_Learning_Management_Sysytem_MVC.CustomException;

public class InvalidLoginException : Exception
{
    public InvalidLoginException(string message) : base(message)
    {
    }
    
}
