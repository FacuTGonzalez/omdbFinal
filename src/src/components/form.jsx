import axios from "axios";
import { Button } from "primereact/button";
//import './FormDemo.css';
import { useState, useEffect } from "react";

export const FormikFormDemo = () => {
  const [registro, setRegistro] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registro);
return axios.post("api/users/register",registro)
  };

  const handleChange = (e) => {
    e.preventDefault();

    const key = e.target.name;
    const value = e.target.value;

    setRegistro({ ...registro, [key]: value });
  };
  ;
  

  return (
    <div>
      <form
        id="form-login"
        action=""
        method="post"
        autocomplete="off"
        onSubmit={handleSubmit}
      >
        <label> Nombre</label>
        <input
          name="name"
          type="text"
          placeholder="Ingresa Usuario"
          placeholder="Ingresa Nombre"
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa Email"
          onChange={handleChange}
        />
        <br />
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa Password"
          onChange={handleChange}
        />
        <br />
        {/*  <p id="bot"><input type="submit" id="submit" name="submit" value="Registrar" class="boton"></input></p>
          <br /> */}
        <Button
          label="Registrar"
          icon="pi pi-check"
          className="p-button-raised p-button-rounded"
        />
      </form>
    </div>
  );
};

{
  /* <div id="cuerpo">
                <form id="form-login" action="" method="post" autocomplete="off">
        
                    <p><label >Usuario:</label></p>
                        <input name="usuario" type="text" id="usuario" placeholder="Ingresa Usuario" autofocus="" required="">
 
                    <p><label>Contraseña:</label></p>
                        <input name="contrasenia" type="password" id="contrasenia" placeholder="Ingresa Password" required="">
 
                    <p id="bot"><input type="submit" id="submit" name="submit" value="Ingresar" class="boton">
                </form>
            </div> */
}

//      <p id="bot"><input type="submit" id="submit" name="submit" value="Registrar" class="boton"></input></p>
