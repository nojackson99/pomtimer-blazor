namespace PomTimer.Client.Features.PomTimer;

public class PomTimerEntity
{
	public int? ActiveTaskId { get; private set; }
	public int StartTimeInSeconds { get; private set; }
	public int TimeLeftInSeconds { get; private set; }
	//public string TimerDisplayString { get; private set; }

	#region Constructor
	//TODO []: add checks to validate input
	public PomTimerEntity (int? activeTaskId, int startTimeInSeconds)
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

	public void UpdateTimeLeft(int timeLeftInSeconds)
	{
		TimeLeftInSeconds = timeLeftInSeconds;
	}

	public void SetActiveTaskId(int activeTaskId)
	{
		ActiveTaskId = activeTaskId;
	}




}

