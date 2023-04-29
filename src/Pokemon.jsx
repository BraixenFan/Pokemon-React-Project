//import fetchIndSpecies from "./fetchIndSpecies";

const Pokemon = (props) => {
  const { name /*speciesUrl, sprites*/ } = props;
  //  const indData = fetchIndSpecies(speciesUrl);
  //  const indTypes = indData?.Data?.any;

  let hero = "src/imgs/PlaceholderPikachu.png";
  //  if (sprites.length) {
  //    hero = sprites[1];
  //  }

  return (
    <div className="pokemon-box">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${name} — ${name}`}</h2>
      </div>
      <div className="details-button">
        <button>Make into card</button>
      </div>
    </div>
  );
};

export default Pokemon;
