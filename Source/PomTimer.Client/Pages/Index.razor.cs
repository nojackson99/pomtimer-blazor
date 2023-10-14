using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace PomTimer.Client.Pages;

public partial class Index : IDisposable
{
	[Inject]
	public required IJSRuntime JSRuntime { get; set; }
	private string timerActionText = "Start";
	private string timerDisplayText = "25:00";
	private DotNetObjectReference<Index>? indexRef;

	private TimerValue timerValue = new();

	private class TimerValue
	{
		public string Hours { get; set; } = "0";
		public string Minutes { get; set; } = "0";
		public string Seconds { get; set; } = "0";
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

	private async Task JsHandleTimerAction()
	{
		timerActionText = new(await JSRuntime.InvokeAsync<string>("handleTimerAction"));
	}

	[JSInvokable]
	public void ReceiveTimerValue(object timerValueObj)
	{
		//FIXME []: make this logic part of the TimerValue class
		string timerValueString = JsonSerializer.Serialize(timerValueObj);

		using (JsonDocument timerValueDoc = JsonDocument.Parse(timerValueString))
		{
			JsonElement root = timerValueDoc.RootElement;

			if(root.TryGetProperty("hours", out JsonElement hours))
			{
				timerValue.Hours = hours.GetInt32().ToString();
			}
			if(root.TryGetProperty("minutes", out JsonElement minutes))
			{
				timerValue.Minutes = minutes.GetInt32().ToString();
			}
			if(root.TryGetProperty("seconds", out JsonElement seconds))
			{
				timerValue.Seconds = seconds.GetInt32().ToString();
			}

			//TODO []: set up logic to not display leading zeros
			timerDisplayText = new StringBuilder()
				.Append(timerValue.Minutes)
				.Append(":")
				.Append(timerValue.Seconds)
				.ToString();

			if(timerValue.Hours != "0")
			{
				timerDisplayText = new StringBuilder()
					.Append(timerValue.Hours)
					.Append(":")
					.Append(timerDisplayText)
					.ToString();
			}

			
			StateHasChanged();
		}
	}
}
