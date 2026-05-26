<div align="center">

<br/>

```
███╗   ███╗██╗   ██╗███████╗██╗ ██████╗    ██████╗ ██╗      █████╗ ██╗   ██╗███████╗██████╗
████╗ ████║██║   ██║██╔════╝██║██╔════╝    ██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗
██╔████╔██║██║   ██║███████╗██║██║         ██████╔╝██║     ███████║ ╚████╔╝ █████╗  ██████╔╝
██║╚██╔╝██║██║   ██║╚════██║██║██║         ██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗
██║ ╚═╝ ██║╚██████╔╝███████║██║╚██████╗    ██║     ███████╗██║  ██║   ██║   ███████╗██║  ██║
╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝ ╚═════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
```

<br/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/Responsive-4CAF50?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Responsive"/>

<br/><br/>

> **A fully-featured, Spotify-inspired web music player — built with zero dependencies.**

<br/>

[![🎵 Live Demo](https://img.shields.io/badge/🎵%20Live%20Demo-1DB954?style=for-the-badge)](https://nate-br.github.io/music-player)
[![⭐ Star on GitHub](https://img.shields.io/github/stars/nate-br/music-player?style=for-the-badge&color=FFD700)](https://github.com/nate-br/music-player/stargazers)
[![📄 License](https://img.shields.io/github/license/nate-br/music-player?style=for-the-badge&color=blue)](LICENSE)

<br/>

</div>

---

<br/>

## 🎨 Preview

<div align="center">

```
┌──────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░  MUSIC PLAYER  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                    │
│  ┌──────────────┐   ┌─────────────────────────────────────────┐  │
│  │  Playlist    │   │          ╔═══════════════╗               │  │
│  │──────────────│   │          ║               ║               │  │
│  │ ► Song One   │   │          ║   Album Art   ║               │  │
│  │   Song Two   │   │          ║               ║               │  │
│  │   Song Three │   │          ╚═══════════════╝               │  │
│  │   Song Four  │   │                                          │  │
│  │   Song Five  │   │       Song Title                         │  │
│  │   Song Six   │   │       Artist Name                        │  │
│  │   ...        │   │                                          │  │
│  │              │   │  ◄◄    ▶▶    ●    ⇄    ↺                 │  │
│  │              │   │  ═══════════●──────────  0:00 / 3:45     │  │
│  │              │   │  🔊 ─────────────●                       │  │
│  └──────────────┘   └─────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

*[🔗 See it live → nate-br.github.io/music-player](https://nate-br.github.io/music-player)*

</div>

<br/>

---

## ✨ Features

<br/>

### 🎛️ Playback Controls
| Feature | Description |
|---|---|
| ▶ **Play / Pause** | Instant toggle with smooth visual feedback |
| ⏭ **Next / Previous** | Skip tracks forward and backward |
| 🔀 **Shuffle Mode** | Randomize your queue on the fly |
| 🔁 **Repeat Mode** | Loop a single track or the entire playlist |
| ⏩ **Seek** | Click or drag anywhere on the progress bar |

<br/>

### 🎨 Interface
| Feature | Description |
|---|---|
| 💿 **Album Art Display** | Full artwork rendering with smooth transitions |
| 📋 **Sidebar Playlist** | Browse and select any track instantly |
| 🌊 **Progress Bar** | Live position indicator with click-to-seek |
| 🔊 **Volume Control** | Adjustable slider with mute support |
| 📱 **Fully Responsive** | Looks great on mobile, tablet, and desktop |

<br/>

### ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Play / Pause |
| `→` | Next track |
| `←` | Previous track |
| `↑` | Volume up |
| `↓` | Volume down |
| `S` | Toggle shuffle |
| `R` | Toggle repeat |
| `M` | Mute / Unmute |

<br/>

---

## 🚀 Getting Started

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/nate-br/music-player.git

# 2. Navigate into the project
cd music-player

# 3. Open in your browser
open index.html
# or just double-click index.html — no build step needed!
```

> No npm. No webpack. No dependencies. Just open and play. 🎉

<br/>

### Adding Your Own Music

Drop your audio files into the `music/` folder, then update the track list in `app.js`:

```javascript
const tracks = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    src: "music/your-track.mp3",
    cover: "covers/your-cover.jpg"
  },
  // add more tracks...
];
```

Supported formats: `.mp3`, `.ogg`, `.wav`, `.flac`

<br/>

---

## 🗂️ Project Structure

```
music-player/
│
├── index.html          ← App entry point
├── style.css           ← All styling (Spotify-inspired dark theme)
├── app.js              ← Player logic, events, keyboard shortcuts
│
├── music/              ← Your audio files go here
│   └── *.mp3
│
└── covers/             ← Album artwork (JPG/PNG/WebP)
    └── *.jpg
```

<br/>

---

## 🛠️ How It Works

The player is powered by the native **HTML5 `<audio>` API** — no libraries, no frameworks.

```
┌─────────────────────────────────────────────────────────┐
│                    Architecture                          │
│                                                          │
│   User Input           Core Logic          Audio API     │
│  ┌──────────┐        ┌──────────────┐    ┌───────────┐  │
│  │ Clicks   │───────►│  app.js      │───►│ <audio>   │  │
│  │ Keyboard │        │              │    │ element   │  │
│  │ Touch    │◄───────│  State mgmt  │◄───│           │  │
│  └──────────┘        └──────────────┘    └───────────┘  │
│                             │                            │
│                      ┌──────▼───────┐                   │
│                      │  DOM Updates  │                   │
│                      │  Progress bar │                   │
│                      │  Volume UI   │                   │
│                      │  Playlist    │                   │
│                      └──────────────┘                   │
└─────────────────────────────────────────────────────────┘
```

Key concepts used:
- **`HTMLAudioElement`** for playback, seeking, volume, and events
- **`timeupdate` event** to drive the progress bar in real time
- **`ended` event** to handle autoplay, shuffle, and repeat logic
- **CSS custom properties** for the theme and transitions
- **`localStorage`** to remember volume and repeat/shuffle preferences *(optional)*

<br/>

---

## 🎯 Roadmap

- [ ] 🎤 Lyrics display
- [ ] 🌙 Light theme toggle
- [ ] 📁 Drag-and-drop file loading
- [ ] 🎚️ Equalizer bands
- [ ] 💾 Persistent playlists via localStorage
- [ ] 📤 PWA / offline support

Have an idea? [Open an issue](https://github.com/nate-br/music-player/issues) or submit a PR!

<br/>

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how:

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
# → Open a Pull Request
```

Please keep PRs focused — one feature or fix per PR. Follow the existing code style (no external dependencies).

<br/>

---

## 📄 License

Released under the [MIT License](LICENSE) — free to use, modify, and distribute.

<br/>

---

<div align="center">

<br/>

Made with ♥ and vanilla JS by **[nate-br](https://github.com/nate-br)**

<br/>

*If you found this useful, a ⭐ star goes a long way!*

<br/>

[![🎵 Open the Player](https://img.shields.io/badge/🎵%20Open%20the%20Player-1DB954?style=for-the-badge&labelColor=191414)](https://nate-br.github.io/music-player)

<br/>

</div>
