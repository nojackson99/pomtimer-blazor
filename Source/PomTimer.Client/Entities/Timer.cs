namespace PomTimer.Client.Entities;

public class PomTimer
{
	public int? ActiveTaskId { get; private set; }
	public int StartTimeInSeconds { get; private set; }
	public int TimeLeftInSeconds { get; private set; }

	#region Constructor
	//TODO []: add checks to validate input
	public PomTimer (int? activeTaskId, int startTimeInSeconds)
	{
		if (activeTaskId is null)
		{
			ActiveTaskId = null;
		}
		else
		{
			ActiveTaskId = activeTaskId;
		}
			
		StartTimeInSeconds = startTimeInSeconds;
		TimeLeftInSeconds = startTimeInSeconds;
	}
	#endregion
}

