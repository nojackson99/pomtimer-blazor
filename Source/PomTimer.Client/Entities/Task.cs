namespace PomTimer.Client.Entities;

public class Task
{
	public Guid Id { get; private set; }
	public Guid UserId { get; private set; }
	public string Description { get; private set; }
	public int SessionsCompleted { get; private set; } = 0;
	public int TotalSessions { get; private set; }
	public bool IsCompleted { get; private set; } = false;

	#region Constructor
	//TODO []: add checks to validate input
	public Task (string description, int totalSessions, Guid userId)
	{
		Id = Guid.NewGuid(); 
		UserId = userId;
		Description = description;
		TotalSessions = totalSessions;
	}
	#endregion

	/// <summary>
	/// Increments the number of sessions completed for this task.
	/// Will do nothing and return if the task is already completed.
	/// </summary>
	public void IncrementSession() {
		if (IsCompleted)
		{
			return;
		}

		SessionsCompleted++;
		if (SessionsCompleted == TotalSessions)
		{
			IsCompleted = true;
		}
	}


}