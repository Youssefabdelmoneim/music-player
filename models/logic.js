export async function musicData(query, songs, type) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&attribute=artistTerm&explicit=yes`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const { resultCount, results } = data;
    if (type === `home`) songs.push(...results);
    else if (type === `searchList`) {
      songs.length = 0;
      songs.push(...results);
    }

    return results;
  } catch (err) {
    throw new Error("there is a problem with fetching data");
  }
}
