/**
 * Core Player Logic
 * Loading tracks, playing and pausing, skipping around — the main stuff.
 */

/**
 * Switch to a different track by its index number.
 * Updates everything on screen and starts playing if we were already going.
 */
function loadTrack(trackIndex) {
  const track = playlist[trackIndex];
  audio.src = track.src;
  songTitle.textContent = track.title;
  songArtist.textContent = track.artist;
  albumArt.src = track.cover;
  albumArt.alt = track.title;
  currentTrackIndex = trackIndex;

  // Light up the right song in the sidebar playlist
  document.querySelectorAll('.playlist-list li').forEach((item, index) => {
    item.classList.toggle('active', index === trackIndex);
  });

  // Reset the progress bar and time labels
  progressBar.value = 0;
  updateProgress(0);
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = '0:00';

  if (isPlaying) play();
}

const play = () => audio.play().catch(() => {});

function togglePlayPause() {
  if (!audio.src) return;
  if (isPlaying) {
    audio.pause();
  } else {
    play();
  }
}

function playNextSong() { loadTrack(getNextTrackIndex()); }
function playPreviousSong() { loadTrack(getPreviousTrackIndex()); }

/** Build the playlist sidebar from scratch.
 * Each song is clickable and takes you right to that track. */
function renderPlaylist() {
  playlistList.innerHTML = '';

  playlist.forEach((track, index) => {
    const li = document.createElement('li');
    li.className = index === currentTrackIndex ? 'active' : '';
    li.innerHTML = `<span class="pl-index">${index + 1}</span><div class="pl-info"><div class="pl-title">${track.title}</div></div>`;

    li.addEventListener('click', () => {
      if (currentTrackIndex !== index) {
        loadTrack(index);
        if (isPlaying) play();
      }
    });
    playlistList.appendChild(li);
  });
}

playBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPreviousSong);
nextBtn.addEventListener('click', playNextSong);

audio.addEventListener('play', () => {
  isPlaying = true;
  setIcon(playBtn, 'pause');
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  setIcon(playBtn, 'play');
});

/** When a song ends, the behavior depends on what's toggled:
 * repeat plays it again, autoplay moves to the next track,
 * and if neither is on, we just stop and reset the progress bar.
 */
audio.addEventListener('ended', () => {
  if (isRepeating) {
    loadTrack(currentTrackIndex);
    play();
  } else if (autoplayToggle.checked) {
    playNextSong();
    if (isPlaying) play();
  } else {
    isPlaying = false;
    setIcon(playBtn, 'play');
    progressBar.value = 0;
    updateProgress(0);
    currentTimeEl.textContent = '0:00';
  }
});
