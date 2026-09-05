import * as model from "/models/logic.js";
import * as view from "/view/logic.js";
let songs = [];
let songsSearchList = [];

const home = document.querySelector(`.home`);
const player = document.querySelector(`.player`);
const searchList = document.querySelector(`.searchList`);
const searchBar = document.querySelector(`.searchBar`);
const search = document.querySelector(`.search`);
async function homePage(...queries) {
  try {
    for (const query of queries) {
      const data = await model.musicData(query, songs, `home`);
      view.createListOfSongs(`home`, home, data, query);
    }
  } catch (err) {
    console.log(err);
  }
}

async function searchFunc(home, search, searchList, e) {
  e.preventDefault();
  const query = search.value;
  await model.musicData(query, songsSearchList, `searchList`);
  view.createListOfSongs(`search`, home, songsSearchList, searchList);
}
homePage(`song`, `Hip Hop`, `Pop`);
view.activateAudioPage(home, searchList, player, songs, songsSearchList);
view.activateSearch(home, searchBar, search, searchList, searchFunc);
