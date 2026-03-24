const blockAds = () => {
  const adElement = document.querySelector('.ad-showing');
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  const video = document.querySelector('video');

  if (adElement && video) {
    video.muted = true;
    video.playbackRate = 16;
    video.currentTime = video.duration - 0.1;
  }

  if (skipButton) {
    skipButton.click();
  }
};

setInterval(blockAds, 500);
