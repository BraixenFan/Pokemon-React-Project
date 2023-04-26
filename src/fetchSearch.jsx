async function fetchSearch({ queryKey }) {
  const { species } = queryKey[1];
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${species}`
  );

  if (!res.ok) throw new Error(`pokemon not found ${species}`);

  return res.json();
}

export default fetchSearch;
