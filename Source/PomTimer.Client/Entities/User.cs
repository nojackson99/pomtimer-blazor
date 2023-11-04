namespace PomTimer.Client.Entities;

public class User
{
	public int Id { get; private set; }
	public string Email { get; private set; }
	public string Password { get; private set; }
	public int PomodoroLengthMinutes { get; private set; } = 25;
	public int ShortBreakLengthMinutes { get; private set; } = 5;
	public int LongBreakLengthMinutes { get; private set; } = 15;
	public int TotalSessionsInCycle { get; private set; } = 4;
	public int SessionsCompletedInCycle { get; private set; } = 0;

	#region Constructor
	//TODO []: add checks to validate input
	public User (string email, string password)
	{
		
		Email = email;
		Password = password;
	}
	#endregion
}