import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import React from "react"
import axios from "axios"

const CardSingleMovie = ({ imdbID }) => {

 const [movie,setMovie]= useState({})


 useEffect(() => {
  return axios
    .get("https://www.omdbapi.com/?apikey=20dac387&i=" + imdbID)
    .then (res=>res.data)
    .then(data=>{
      console.log("bbb",data)
      setMovie(data)})
}, []) 
   const header = (



    <img
      alt="Card"
      src={movie.Poster}
      style={{ maxWidth: "75%", maxHeight: "200px",        borderRadius:'5px'
    }}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <div style={{paddingTop:'0px'}}>
      <Button label="addFavorite" icon="pi pi-star" />

    </div>
  );

  return (
     <Card
      subTitle={movie.Title}
      style={{
        maxHeight: "100%",
        maxWidth: '600px',
        marginBottom : '10px',
        fontSize: "13px",
        boxShadow: '5px 2px 2px gray',
        borderRadius:'5px'
      }}
      
      header={header}
      footer={footer}
    >
      <p className="p-m-0" style={{lineHeight: '1.5'}}>year: {movie.Year}</p>
      <p className="p-m-0" style={{lineHeight: '1.5'}}>RunTime: {movie.Runtime}</p>
      <p className="p-m-0" style={{lineHeight: '1.5'}}>Genre: {movie.Genre}</p>
      <p className="p-m-0" style={{lineHeight: '1.5'}}>Director: {movie.Director}</p>
      <p className="p-m-0" style={{lineHeight: '1.5'}}>Actors: {movie.Actors}</p>
      <p className="p-m-0" style={{lineHeight: '1.5'}}><h3>Plot:</h3>{movie.Plot}</p>
      <br />
      <p className="p-m-0" style={{lineHeight: '1.5'}}>Production: {movie.Production}</p>

    </Card>
     
  );    
};

export default CardSingleMovie;