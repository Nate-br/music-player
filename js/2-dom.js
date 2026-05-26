/**
 * DOM References & Application State
 *
 * Every HTML element we need to touch, plus the
 * variables that track what the player's doing.
 */

const audio = new Audio();
const get = (id) => document.getElementById(id);

// -------- All the buttons and displays --------
const playBtn = get('playBtn');
const prevBtn = get('prevBtn');
const nextBtn = get('nextBtn');
const shuffleBtn = get('shuffleBtn');
const repeatBtn = get('repeatBtn');
const progressBar = get('progressBar');
const volumeBar = get('volumeBar');
const muteBtn = get('muteBtn');
const currentTimeEl = get('currentTime');
const durationEl = get('duration');
const songTitle = get('songTitle');
const songArtist = get('songArtist');
const albumArt = get('albumArt');
const playlistList = get('playlistList');
const autoplayToggle = get('autoplayToggle');
const downloadBtn = get('downloadBtn');
const backBtn = get('backBtn');
const forwardBtn = get('forwardBtn');
const browseBtn = get('browseBtn');
const songsBtn = get('songsBtn');
const createPlaylistBtn = get('createPlaylistBtn');
const playlistToggle = get('playlistToggle');

// -------- What state is the player in? --------
let currentTrackIndex = 0;
let isPlaying = false;
let isSeeking = false;
let isMuted = false;
let previousVolume = 80;
let isShuffled = false;
let isRepeating = false;
let shuffleOrder = [];

/**
 * Takes raw seconds and turns it into something like "3:45"
 * so we can show it on screen.
 */
function formatTime(rawSeconds) {
  if (isNaN(rawSeconds) || rawSeconds < 0) return '0:00';
  const minutes = Math.floor(rawSeconds / 60);
  const seconds = Math.floor(rawSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * When shuffle is on, we need a random order to play through.
 * This builds that list (without the song currently playing).
 */
function generateShuffleOrder() {
  shuffleOrder = playlist.map((_, index) => index).filter(index => index !== currentTrackIndex);
  for (let i = shuffleOrder.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffleOrder[i], shuffleOrder[j]] = [shuffleOrder[j], shuffleOrder[i]];
  }
}

/**
 * If shuffle is on, we pull from the randomized list.
 * Run out? Reshuffle. Shuffle off? Just go to the next track.
 */
function getNextTrackIndex() {
  if (isShuffled) {
    if (shuffleOrder.length === 0) generateShuffleOrder();
    return shuffleOrder.shift();
  }
  return (currentTrackIndex + 1) % playlist.length;
}

/**
 * Go back one track, wrapping around to the end if needed.
 */
function getPreviousTrackIndex() {
  return (currentTrackIndex - 1 + playlist.length) % playlist.length;
}
