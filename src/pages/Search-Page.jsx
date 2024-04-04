import { useState } from "react";
import Input from "../components/input";
import { getPokemon } from "../components/services/pokeapi-service";
import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { FaWeightScale } from "react-icons/fa6";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
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
  const FavoriteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${colors.gray.medium};
    border: none;
    border-radius: 0.8rem;
    padding: 0.5rem 1rem;
    font-family: ${typography.text};
    font-weight: bold;
    color: white;
    cursor: pointer;
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
        <p>
          <LiaRulerVerticalSolid />
          Height: {dataPokemon.height / 10} m
        </p>
        <p>
          <FaWeightScale /> Weight: {dataPokemon.weight / 10} kg
        </p>
        <FavoriteButton>
          <RiStarFill color={colors.gray.light} /> Mark as favorite
        </FavoriteButton>
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
