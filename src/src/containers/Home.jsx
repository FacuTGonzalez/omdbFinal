import logo from "../../logo.svg";
import "../../App.css";

import { CardPelis } from "../components/cardsMovie";
import { MenubarDemo } from "../components/navBar";

import { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const [search, setSearch] = useState([]);
  const [apiMovie, setApiMovie] = useState([]);

  const handleChange = (e) => {
    const peliInput = e.target.value;
    //console.log("hola perri", peliInput);
    setSearch(peliInput);
    //console.log(search)
  };

  const handleClick = (e) => {
    //e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&s=${search}`)
      .then((r) => {
        setApiMovie(r.data.Search);
      });
  };

  return (
    <div className="App" >
      <MenubarDemo handleChange={handleChange} handleClick={handleClick} />

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',alignItems:'center',padding:'20px',width:'100%'}}>
        {apiMovie.length != 0 &&
          apiMovie.map((movie) => {
            return <CardPelis movie={movie} />;
          })}
      </div>
    </div>
  );
}

//unificar ambos componentes de movies y mapear cardSingleMovie en vez de cardsMovie