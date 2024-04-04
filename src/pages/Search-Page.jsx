import { useState } from "react";
import Input from "../components/input";
import { getPokemon } from "../components/services/pokeapi-service";
function SearchPage() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(query);
    getPokemon(query)
      .then((datpokemon) => setPokemon(datpokemon))
      .catch((error) => console.log(error));
    console.log(pokemon);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="query"
        placeholder="pokemon name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchPage;
