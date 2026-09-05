# MusicHub 🎵

A music discovery and playback web app built with vanilla JavaScript, following an MVC (Model–View–Controller) architecture.

## Overview

MusicHub lets users browse curated song sections, search for songs/albums/artists, and play song previews — all powered by the iTunes Search API.

**Architecture:**
- **Model** — fetches data from the iTunes Search API.
- **View** — renders the DOM (song lists, album cards, player UI) and wires up user interaction handlers.
- **Controller** — the thin layer between them: asks the Model for data, hands it to the View to render.

```
flowchart TD
    View -->|user interacts| Controller
    Controller -->|requests data| Model
    Model -->|fetches data| View
```

## Features

- **Home screen**
  - Search bar for songs, albums, and artists
  - Curated sections: popular singles, recently played, high-frequency listened
  - Album covers with name and artist
- **Interactions**
  - Click an album → view its list of songs
  - Click a song → open a player view with audio preview
- **Navigation**
  - Arrow controls and trackpad two-finger swipe to move between home screen sections

## Tech Stack

- Vanilla JavaScript (ES Modules)
- HTML5 / CSS (Sass)
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)

## Project Structure

```
.
├── index.html
├── sass/
│   └── style.css
├── controllers/
│   └── logic.js
├── view/
│   └── logic.js
└── models/
    └── logic.js
```



## Author

Built by Youssef
