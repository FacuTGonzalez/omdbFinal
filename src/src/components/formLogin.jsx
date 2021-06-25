import axios from "axios";
import { Button } from "primereact/button";
//import './FormDemo.css';
import { useState, useEffect } from "react";

export const FormLogin= () => {
  const [login, setLogin] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
return axios.post("api/users/login",login).then(respuesta=>{
 const userLogeado= respuesta.data[0]
    window.localStorage.setItem("user",JSON.stringify(userLogeado))
    alert(`Bienvenido ${respuesta.data[0].name}`)
})

  };
//window.localStorage.setItem(respuesta)
  const handleChange = (e) => {
    e.preventDefault();

    const key = e.target.name;
    const value = e.target.value;

    setLogin({ ...login, [key]: value });
  };
  
  

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
          label="Log In"
          icon="pi pi-check"
          className="p-button-raised p-button-rounded"
        />
      </form>
    </div>
  );
};