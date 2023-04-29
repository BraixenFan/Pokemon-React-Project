async function fetchIndSpecies({ url }) {
  const res = await fetch(url);
  console.log(url); // Aqui siempre dice undefined

  if (!res.ok) throw new Error(`something went wrong ${url}`);

  return res.json();
}

export default fetchIndSpecies;
