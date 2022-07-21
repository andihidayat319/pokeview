import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyPokemonList from "./views/MyPokemonList";
import PokemonDetail from "./views/PokemonDetail";
import PokomenList from "./views/PokemonList";

export const pokemonContext = createContext()
export default function App () {
  const [pokemon, setPokemon] = useState('')

  return (
    <pokemonContext.Provider value ={{pokemon, setPokemon}}>
      <Navbar />
      <Routes>
          <Route path="/" element={<PokomenList />} />
          <Route path="/detail/:name" element={<PokemonDetail />} />
          <Route path="/mypokemon" element={<MyPokemonList />} />
      </Routes>
    </pokemonContext.Provider>
  )
}
