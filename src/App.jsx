import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchPokemon } from "./api";
import "./App.css";

function App() {
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("Result ", result);
  };

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
    </div>
  );
}

export default App;
