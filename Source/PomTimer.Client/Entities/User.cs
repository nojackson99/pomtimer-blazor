namespace PomTimer.Client.Entities;

public class User
{
	public Guid Id { get; private set; }
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
		Id = Guid.NewGuid();
		Email = email;
		Password = password;
	}
	#endregion

	public void UpdateUserSettings(int pomodoroLengthMinutes, int shortBreakLengthMinutes, int longBreakLengthMinutes, int totalSessionsInCycle)
	{
		PomodoroLengthMinutes = pomodoroLengthMinutes;
		ShortBreakLengthMinutes = shortBreakLengthMinutes;
		LongBreakLengthMinutes = longBreakLengthMinutes;
		TotalSessionsInCycle = totalSessionsInCycle;
	}

	/// <summary>
	/// Increments the number of work sessions completed in this cycle.
	/// </summary>
	/// <returns>
	/// Boolean that indicates if the cycle is complete.
	/// </returns>
	public bool IncrementSession()
	{
		SessionsCompletedInCycle++;
		if (SessionsCompletedInCycle == TotalSessionsInCycle)
		{
			SessionsCompletedInCycle = 0;
			return true;
		}
		return false;
	}
}