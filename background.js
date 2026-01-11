// Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
  // Execute script in the active tab to toggle grayscale filter
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleGrayscale
  });
});

// Function that will be injected into the page
function toggleGrayscale() {
  const body = document.body;
  const currentFilter = body.style.filter;
  
  // Toggle grayscale filter
  if (currentFilter === 'grayscale(100%)') {
    body.style.filter = '';
  } else {
    body.style.filter = 'grayscale(100%)';
  }
}
