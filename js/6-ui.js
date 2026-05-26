/**
 * Extra Controls & Bootstrapping
 *
 * Toggle shuffle and repeat, download tracks,
 * navigate the sidebar, keyboard shortcuts, startup.
 */

// -------- Shuffle and repeat toggles --------

shuffleBtn.addEventListener('click', () => {
  isShuffled = !isShuffled;
  shuffleBtn.style.color = isShuffled ? '#1DB954' : '';
  if (isShuffled) generateShuffleOrder();
});

repeatBtn.addEventListener('click', () => {
  isRepeating = !isRepeating;
  repeatBtn.style.color = isRepeating ? '#1DB954' : '';
});

// -------- Download the song that's currently playing --------

downloadBtn.addEventListener('click', async () => {
  downloadBtn.style.opacity = '0.5';
  const track = playlist[currentTrackIndex];
  try {
    const response = await fetch(track.src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${track.title}.mp3`;
    a.click();
    URL.revokeObjectURL(url);
  } catch {
    const a = document.createElement('a');
    a.href = track.src;
    a.target = '_blank';
    a.click();
  }
  downloadBtn.style.opacity = '';
});

// -------- Navigation arrows and playlist toggle --------

backBtn.addEventListener('click', playPreviousSong);
forwardBtn.addEventListener('click', playNextSong);

playlistToggle.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('hidden');
});

// -------- Keyboard shortcuts --------
document.addEventListener('keydown', (event) => {
  if (event.target.tagName === 'INPUT') return;
  if (event.code === 'Space') {
    event.preventDefault();
    togglePlayPause();
  }
  if (event.code === 'ArrowRight') playNextSong();
  if (event.code === 'ArrowLeft') playPreviousSong();
});

// -------- Fire it up --------
updateVolume(volumeBar.value);
loadTrack(0);
renderPlaylist();
