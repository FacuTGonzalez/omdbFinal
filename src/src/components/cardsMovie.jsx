import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export const CardPelis = ({ movie }) => {

  const header = (
  
    <img
      alt="Card"
      src={movie.Poster}
      style={{ maxWidth: "100%", maxHeight: "200px",        borderRadius:'5px'
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

    <Link to={`/singleMovie/${movie.imdbID}`}>
     <Card
      subTitle={movie.Title}
      style={{
        maxHeight: "360px",
        maxWidth: '200px',
        marginBottom : '10px',
        fontSize: "13px",
        boxShadow: '5px 2px 2px gray',
        borderRadius:'5px'
      }}
     
      header={header}
      footer={footer}
    >
      <span style={{padding:0,margin:0}}>{movie.Year}</span>
    </Card>
    </Link>
  );   
};
