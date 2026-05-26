/**
 * Progress Bar & Volume Controls
 *
 * Keeping the progress bar filled to where it should be.
 * Same deal for the volume slider. Mute button too.
 */

/**
 * Paint the progress bar so the white fill goes up to whatever
 * percentage we've played so far.
 */
function bg(pct) {
  return `linear-gradient(to right, #fff ${pct}%, rgba(255,255,255,0.15) ${pct}%)`;
}

function updateProgress(pct) {
  progressBar.style.background = bg(pct);
}

function updateVolume(pct) {
  volumeBar.style.background = bg(pct);
}

// -------- Keeping time in sync --------

audio.addEventListener('timeupdate', () => {
  if (!isSeeking && audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressBar.value = pct;
    updateProgress(pct);
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

// -------- Dragging the progress bar --------

progressBar.addEventListener('input', () => {
  isSeeking = true;
  updateProgress(progressBar.value);
  if (audio.duration) {
    currentTimeEl.textContent = formatTime((progressBar.value / 100) * audio.duration);
  }
});

progressBar.addEventListener('change', () => {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
  isSeeking = false;
});

// -------- Volume slider and mute --------

volumeBar.addEventListener('input', () => {
  const val = volumeBar.value;
  audio.volume = val / 100;
  updateVolume(val);
  if (val > 0) {
    isMuted = false;
    previousVolume = val;
  }
});

/**
 * Mute button remembers your previous volume setting.
 * Click once to mute, click again to restore.
 */
muteBtn.addEventListener('click', () => {
  if (isMuted) {
    audio.volume = previousVolume / 100;
    volumeBar.value = previousVolume;
    updateVolume(previousVolume);
    isMuted = false;
    setIcon(muteBtn, 'volume-2');
  } else {
    previousVolume = volumeBar.value || 80;
    audio.volume = 0;
    volumeBar.value = 0;
    updateVolume(0);
    isMuted = true;
    setIcon(muteBtn, 'volume-x');
  }
});
