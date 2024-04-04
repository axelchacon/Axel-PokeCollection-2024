import { useState } from "react";
import Input from "../components/input";
import { getPokemon } from "../components/services/pokeapi-service";
import styled from "@emotion/styled";
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
  function formatId(id) {
    id = String(id);
    return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
  }
  const PokeImage = styled.img`
    max-width: 144px;
  `;
  function PokemonData({ dataPokemon }) {
    return (
      <div>
        <h2>{dataPokemon.name}</h2>
        <p>{formatId(dataPokemon.id)}</p>
        <PokeImage
          src={dataPokemon.sprites.other["official-artwork"].front_default}
          alt={dataPokemon.name}
        />
        {dataPokemon.types.map((element) => (
          <p key={element.slot}>{element.type.name}</p>
        ))}
        <p>Height: {dataPokemon.height / 10} m</p>
        <p>Weight: {dataPokemon.weight / 10} kg</p>
        <button>Mark as favorite</button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {pokemon ? <PokemonData dataPokemon={pokemon} /> : "Ready to search"}
    </div>
  );
}

export default SearchPage;
