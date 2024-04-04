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
  const [state, setState] = useState({
    status: "idle", // success, error,pending
    data: null,
    error: null,
  });
  const { status, data: pokemon, error } = state;
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(query);
    if (query.length === 0) return;
    getPokemon(query)
      .then((datpokemon) =>
        setState({ status: "success", data: datpokemon, error: null })
      )
      .catch((error) =>
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intenta de nuevo",
        })
      );
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

      {status === "idle" && "Ready to search"}
      {status === "success" && <PokemonData dataPokemon={pokemon} />}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchPage;
