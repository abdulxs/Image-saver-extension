document.getElementById('saveImages').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: saveImages,
      });
    });
  });
  
  function saveImages() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      const link = document.createElement('a');
      link.href = images[i].src;
      link.download = 'image' + i + '.jpg';
      link.click();
    }
  }
  