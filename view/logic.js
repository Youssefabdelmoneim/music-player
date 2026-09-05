export function createListOfSongs(type, home, data, ...val) {
  const list = data.map((song) => createSong(type, song)).join(" ");

  if (type === `home`) {
    const [query] = val;
    const html = `
         <p class="titleOfList"> Top Songs ${query === `song` ? `` : ` In ${query} `} </p>
         <div class="topHits">
         ${list}
         </div>
         
         `;
    home.insertAdjacentHTML("beforeend", html);
  } else if (type === `search`) {
    const [searchList, player] = val;
    searchList.innerHTML = list;
    searchList.classList.remove("hidden");
    home.classList.add("hidden");
    player.classList.add("hidden");
  }
}
function createSong(type, song) {
  return `
  <div class="song${type === "home" ? "" : "_searchList"}" id="${song.trackId}">
  <img 
    src="${song.artworkUrl100}" 
    alt="Art work" 
    class="song_img${type === "home" ? "" : "_searchList"}" 
  />
  <div class="song_description${type === "home" ? "" : "_searchList"}">
    <div class="song_description_artName${type === "home" ? "" : "_searchList"}">
      ${song.trackName}
    </div>
    <div class="song_description_details${type === "home" ? "" : "_searchList"}">
      ${song.wrapperType} &#183; ${song.artistName}
    </div>
  </div>
</div>
      `;
}

export function activateAudioPage(
  home,
  searchList,
  player,
  songs,
  songsSearchList,
) {
  document.addEventListener(
    "click",
    setAudioPage.bind(null, home, searchList, player, songs, songsSearchList),
  );
}

function setAudioPage(home, searchList, player, songs, songsSearchList, e) {
  let song = e.target.closest(`.song`);
  if (!song) song = e.target.closest(`.song_searchList`);
  if (song) {
    let songData = songs.find((s) => s.trackId == song.id);
    if (!songData) {
      songData = songsSearchList.find((s) => s.trackId == song.id);
    }
    const html = `
<div class="player-view">
  <div class="player-photo">
    <img src="${songData.artworkUrl100}" alt="Art work" />
  </div>

  <div class="player-name">
    ${songData.trackName}
  </div>

  <div class="player-controller">
    <audio controls autoplay>
      <source src="${songData.previewUrl}" type="audio/mp4" />
      Your browser does not support the audio element.
    </audio>
  </div>
</div>
 
     `;
    player.innerHTML = html;
    home.classList.add("hidden");
    searchList.classList.add("hidden");
    player.classList.remove("hidden");
  }
}
export function activateSearch(
  home,
  searchBar,
  search,
  searchList,
  searchFunc,
) {
  searchBar.addEventListener(
    "submit",
    searchFunc.bind(null, home, search, searchList),
  );
}
