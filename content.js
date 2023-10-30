function saveImages() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      const link = document.createElement('a');
      link.href = images[i].src;
      link.download = 'image' + i + '.jpg';
      link.click();
    }
  }
  
  // Injected content script
  saveImages();
  