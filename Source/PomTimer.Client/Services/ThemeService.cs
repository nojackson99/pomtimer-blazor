using System;

public class ThemeService
{
	// Creates an event that can be subscribed to by other classes
	// The event is invoked when the theme changes
	// TODO[]: setup theme change animation
	public event Action? OnThemeChange;

	private string mainTheme = "pomodoro-theme";

	public string MainTheme
	{
		get => mainTheme;
		set
		{
			if(mainTheme != value)
			{
				mainTheme = value;
				// Notify subscribers that theme has changed
				OnThemeChange?.Invoke();
			}
		}
	}
}