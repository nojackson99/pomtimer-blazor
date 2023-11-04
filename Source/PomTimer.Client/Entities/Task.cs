namespace PomTimer.Client.Entities;

public class Task
{
	public int Id { get; private set; }
	public int UserId { get; private set; }
	public string Description { get; private set; }
	public int SessionsCompleted { get; private set; }
	public int TotalSessions { get; private set; }
	public bool IsCompleted { get; private set; }

	#region Constructor
	public Task (string description, int totalSessions)
	{
		//TODO []: add checks to validate input
		Description = description;
		TotalSessions = totalSessions;
	}
	#endregion
}