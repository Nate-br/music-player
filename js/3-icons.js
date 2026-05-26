/**
 * Setting Up Icons with Lucide
 *
 * Lucide gives us nice SVG icons. This little helper
 * swaps out a button's contents for whichever icon we want.
 */

function setIcon(el, icon) {
  el.innerHTML = `<i data-lucide="${icon}"></i>`;
  lucide.createIcons({}, el);
}

// Static icons — set once when the page loads
setIcon(prevBtn, 'skip-back');
setIcon(playBtn, 'play');
setIcon(nextBtn, 'skip-forward');
setIcon(muteBtn, 'volume-2');
