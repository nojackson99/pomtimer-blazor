using Microsoft.AspNetCore.Components;

namespace PomTimer.Client.Shared.Components.PomTimerAnimatedButton;

public partial class PomTimerAnimatedButton
{
	[Parameter]
	public string Text { get; set; } = string.Empty;
	[Parameter]
	public EventCallback OnClick { get; set; }

	private async Task HandleClick()
	{
		await OnClick.InvokeAsync();
	}
}