import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Pokemon() {
const [pokemonData, setPokemonData] = useState(null);
const [isShiny, setIsShiny] = useState(false);
const [pokemonId, setPokemonId] = useState(1); 
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemons = async (id) => {
    try {
    const response = await fetch(`${BASE_URL}${id}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();
    setPokemonData(data);
    } catch (error) {
    console.error("Error fetching Pokémon:", error.message);
    }
};

useEffect(() => {
    fetchPokemons(pokemonId);
}, [pokemonId]);

return (
    <>
    <style>
        {`
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
        }
        .shiny-effect {
            animation: blink 0.8s infinite;
        }
        `}
    </style>

<div className="container center" style={{ marginTop: "40px" }}>
<h3 
    style={{
    fontFamily: "'Pokemon Solid', sans-serif",
    fontSize: "48px",
    letterSpacing: "2px",
    color: "#FFD700",
    WebkitTextStroke: "2px #000", 
    textShadow: "4px 4px 0px #1E90FF",
    }}>Pokédex
</h3>

        {!pokemonData ? (
        <p>Cargando Pokémon...</p>
        ) : (
        <div
            style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "400px",
            margin: "20px auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}>
            <h4 style={{ textTransform: "capitalize" }}>
            #{pokemonId} – {pokemonData.name}
            </h4>

<img
src={
    isShiny
    ? pokemonData.sprites.front_shiny
    : pokemonData.sprites.front_default
}
alt={pokemonData.name}
style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }}
/>


<div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
<button
    className="btn yellow darken-2 black-text"
    style={{ borderRadius: "10px" }}
    onClick={() => setIsShiny(!isShiny)}
>
    {isShiny ? "Ver normal" : "Ver shiny"}
</button>
</div>

            <p><b>Altura:</b> {pokemonData.height}</p>
            <p><b>Peso:</b> {pokemonData.weight}</p>

            <p><b>Tipos:</b></p>
            {pokemonData.types.map((t, i) => (
            <span key={i} style={{ marginRight: "8px" }}>
                {t.type.name}
            </span>
            ))}

            <div style={{ marginTop: "20px" }}>
            <button
                className="btn green darken-2"
                style={{ borderRadius: "10px", marginRight: "10px" }}
                disabled={pokemonId === 1}
                onClick={() => setPokemonId((id) => id - 1)}
            >
                ◀ Anterior
            </button>

            <button
                className="btn red darken-2"
                style={{ borderRadius: "10px" }}
                disabled={pokemonId === 20}
                onClick={() => setPokemonId((id) => id + 1)}
            >
                Siguiente ▶
            </button>
            </div>
        </div>
        )}
    </div>

    <Footer />
    </>
);
}

export default Pokemon;
