import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    species: "",
  });

  const results = useQuery(["search", requestParams], fetchSearch);
  const varieties = results?.data?.varieties ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            species: formData.get("species").toLowerCase() ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="species">
          Name of species
          <input id="species" name="species" placeholder="species" />
        </label>

        <button>Submit</button>
      </form>
      <Results varieties={varieties} />
    </div>
  );
};

export default SearchParams;
