import Pokemon from "./Pokemon";

const Results = ({ varieties }) => {
  return (
    <div className="search">
      {!varieties.length ? (
        <h1>That species wasnt found</h1>
      ) : (
        varieties.map((pokemon) => {
          return (
            <Pokemon
              name={pokemon.pokemon.name}
              key={pokemon.id}
              description={pokemon.pokemon.url}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
