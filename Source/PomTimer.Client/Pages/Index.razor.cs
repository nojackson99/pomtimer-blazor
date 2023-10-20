using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace PomTimer.Client.Pages;

public partial class Index : IDisposable
{
	public Index() {}
	// [Inject]
	// public ThemeService ThemeService { get; set; } = default!;
	[Inject]
	public required IJSRuntime JSRuntime { get; set; }
	private DotNetObjectReference<Index>? indexRef;
	private string timerActionText { get; set; } = "Start";
	public int timerInMinutes { get; set; } = 25;
	public TimerValue timerValue { get; set; } = new("25:00");
	public class TimerValue
	{
		public TimerValue(string displayText) {
			DisplayText = displayText;
		}
		public string Hours { get; set; } = "0";
		public string Minutes { get; set; } = "0";
		public string Seconds { get; set; } = "0";
		public string DisplayText { get; set;}
	}
	
	protected override async Task OnInitializedAsync()
	{
		indexRef = DotNetObjectReference.Create(this);
		await JSRuntime.InvokeVoidAsync("setIndexReference", indexRef);
	}

	public void Dispose()
    {
        indexRef?.Dispose();
    }

	[JSInvokable]
	public void ReceiveTimerValue(object timerValueObj)
	{
		//FIXME []: make this logic part of the TimerValue class
		string timerValueString = JsonSerializer.Serialize(timerValueObj);
		string? hoursString = null;
		string? minutesString = null;
		string? secondsString = null;

		using (JsonDocument timerValueDoc = JsonDocument.Parse(timerValueString))
		{
			JsonElement root = timerValueDoc.RootElement;

			if(root.TryGetProperty("hours", out JsonElement hours))
			{
				hoursString = hours.GetInt32().ToString();
			}
			if(root.TryGetProperty("minutes", out JsonElement minutes))
			{
				minutesString = minutes.GetInt32().ToString();
			}
			if(root.TryGetProperty("seconds", out JsonElement seconds))
			{
				secondsString = seconds.GetInt32().ToString();
			}
		}

		ConstructTimerDisplay(hoursString, minutesString, secondsString);
	}

	private void ConstructTimerDisplay(
		string? hours, 
		string? minutes, 
		string? seconds
	)
	{
		if(seconds!.Length < 2) {
			seconds = new StringBuilder()
				.Append("0")
				.Append(seconds)
				.ToString();
		}

		//TODO []: set up logic to not display leading zeros
		timerValue.DisplayText = new StringBuilder()
			.Append(minutes)
			.Append(":")
			.Append(seconds)
			.ToString();

		if(hours != "0")
		{
			timerValue.DisplayText = new StringBuilder()
				.Append(hours)
				.Append(":")
				.Append(timerValue.DisplayText)
				.ToString();
		}
		StateHasChanged();
	}

	private async Task JsHandleTimerAction()
	{
		timerActionText = new(await JSRuntime.InvokeAsync<string>("handleTimerAction", timerInMinutes));
	}

	private void OnPomodoro() {
		timerInMinutes = 25;
		ThemeService.MainTheme = "pomodoro-theme";
		ConstructTimerDisplay("0", timerInMinutes.ToString(), "0");
		ResetTimer();
	}

	private void OnShortBreak() {
		timerInMinutes = 5;
		ThemeService.MainTheme = "short-break-theme";
		ConstructTimerDisplay("0", timerInMinutes.ToString(), "0");
		ResetTimer();
	}

	private void OnLongBreak() {
		timerInMinutes = 15;
		ThemeService.MainTheme = "long-break-theme";
		ConstructTimerDisplay("0", timerInMinutes.ToString(), "0");
		ResetTimer();
	}

	private async void ResetTimer() {
		await JSRuntime.InvokeVoidAsync("stopTimer");
		timerActionText = "Start";
		StateHasChanged();
	}
}
