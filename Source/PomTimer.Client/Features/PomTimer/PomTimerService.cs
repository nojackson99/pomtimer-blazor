using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace PomTimer.Client.Features.PomTimer;

public class PomTimerService : IPomTimerService
{
	// keeps track of the PomTimerEntity used by the application
	private PomTimerEntity? PomTimerEntity { get; set; } = null;
	private DotNetObjectReference<PomTimerService>? pomTimerServiceRef;
	
	#region Constructor
	public PomTimerService() 
	{
		pomTimerServiceRef = DotNetObjectReference.Create(this);
	}
	#endregion

	#region Inject
	[Inject]
	public required IJSRuntime JSRuntime { get; set; }
	#endregion
	
	public async Task InitializeAsync(int? activeTaskId, int startTimeInSeconds)
	{
		await JSRuntime.InvokeVoidAsync("setPomTimerServiceReference", pomTimerServiceRef);
		PomTimerEntity = new(activeTaskId, startTimeInSeconds);
	}

	public async Task InstantiateEasyTimer()
	{
		await JSRuntime.InvokeVoidAsync("startTimer");
	}

	public string UpdateTimerDisplay()
	{
		// TODO []: create some sort of event that updates the timer display every time UpdateTimerDisplay is called.
		return "";
	}

	public void PlayTimer()
	{}

	public void PauseTimer()
	{}
}

public interface IPomTimerService
{
	Task InitializeAsync(int? activeTaskId, int startTimeInSeconds);	
	Task InstantiateEasyTimer();
	/// <summary>
	/// Called from js interop, will update the time left in PomTimerEntity and
	/// 
	/// </summary>
	/// <returns></returns>
	string UpdateTimerDisplay();
	void PlayTimer();
	void PauseTimer();
	
}