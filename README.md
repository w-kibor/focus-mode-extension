#  Focus Mode Chrome Extension
A lightweight Chrome Extension built with Manifest V3 that helps you stay focused by toggling a grayscale filter on any website with a single click.

## Features
- **Instant Grayscale**: Removes distracting colors from any webpage.
- **Toggle Functionality**: Click the icon to turn focus mode on; click again to turn it off.
- **Minimalist**: No UI or popups needed—just click the toolbar icon.
- **Privacy-Focused**: Only requests permission for the active tab when you click it.

## Built With
- JavaScript (Service Workers)
- Chrome Extension API (Manifest V3)
- CSS (Filter manipulation)

## Installation (Developer Mode)
Since this extension is not on the Web Store, follow these steps to load it locally:

1. Clone or Download this repository to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top-right corner, toggle **Developer mode** to ON.
4. Click the **Load unpacked** button.
5. Select the folder containing this project's files.
6. (Recommended) Click the **Puzzle Piece** icon in your Chrome toolbar and **Pin** "Focus Mode" for easy access.

## How to Use
1. Navigate to any website (e.g., YouTube, News sites).
2. Click the **Focus Mode** icon in your browser toolbar.
3. Watch the page turn grayscale! Click it again to restore color.

## Project Structure
- `manifest.json` - Extension configuration and permissions.
- `background.js` - Service worker that handles the click event and script injection.

## Pro-Tip for your README
If you want to make it look even better, you can add a small License section at the bottom (like "MIT License") or a Future Improvements section where you list things you want to add later, like:

- [ ] Add a timer to turn focus mode off automatically.
- [ ] Allow users to choose "Sepia" or "Dark" mode instead of just grayscale.
