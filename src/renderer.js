document.getElementById('switch-color-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle();

    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light';
});

// To display mode :
// <p>Current theme source: <strong id="theme-source">System</strong></p>