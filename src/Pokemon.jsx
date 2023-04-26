const Pokemon = (props) => {
  const { name, description } = props;

  return (
    <div className="pokemon">
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${name} — ${description}`}</h2>
      </div>
    </div>
  );
};

export default Pokemon;
