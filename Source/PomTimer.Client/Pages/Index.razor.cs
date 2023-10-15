using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace PomTimer.Client.Pages;

public partial class Index
{
	[Inject]
	public required IJSRuntime JSRuntime { get; set; }
	private string timerActionText = "Start";
	private string timerDisplayText = "25:00";
	private IndexViewModel? ViewModel;
	
	protected override async Task OnInitializedAsync()
	{
		ViewModel = new IndexViewModel(JSRuntime);
		await ViewModel.JsSetIndexReference();
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
				ViewModel!.timerValue.Hours = hours.GetInt32().ToString();
			}
			if(root.TryGetProperty("minutes", out JsonElement minutes))
			{
				ViewModel!.timerValue.Minutes = minutes.GetInt32().ToString();
			}
			if(root.TryGetProperty("seconds", out JsonElement seconds))
			{
				ViewModel!.timerValue.Seconds = seconds.GetInt32().ToString();
			}

			//TODO []: set up logic to not display leading zeros
			timerDisplayText = new StringBuilder()
				.Append(ViewModel!.timerValue.Minutes)
				.Append(":")
				.Append(ViewModel!.timerValue.Seconds)
				.ToString();

			if(ViewModel!.timerValue.Hours != "0")
			{
				timerDisplayText = new StringBuilder()
					.Append(ViewModel.timerValue.Hours)
					.Append(":")
					.Append(timerDisplayText)
					.ToString();
			}

			
			StateHasChanged();
		}
	}
}
