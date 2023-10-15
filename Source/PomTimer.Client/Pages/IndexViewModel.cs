using Microsoft.JSInterop;

namespace PomTimer.Client.Pages;

public class IndexViewModel
{
	public IndexViewModel(IJSRuntime jsRuntime)
	{
		this.jsRuntime = jsRuntime;
		indexViewModelRef = DotNetObjectReference.Create(this);
	}
	public class TimerValue
	{
		public string Hours { get; set; } = "0";
		public string Minutes { get; set; } = "0";
		public string Seconds { get; set; } = "0";
	}

	private DotNetObjectReference<IndexViewModel>? indexViewModelRef;
	private readonly IJSRuntime jsRuntime;
	// this should be pascal since property is public
	public TimerValue timerValue { get; set; } = new();

	public async Task JsSetIndexReference() {
		await jsRuntime.InvokeVoidAsync("setIndexReference", indexViewModelRef);
	}
}