import { useState } from "react";
import Input from "../components/input";
function SearchPage() {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
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
