import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";




export const MenubarDemo = ({handleChange , handleClick}) => {

  const loadState = () => {
    try {
      const serializedState = localStorage.getItem(`user`);
  
      if (serializedState === null) {
        return undefined;
      }
      const state = JSON.parse(serializedState);
  
      return state;
    } catch (err) {
      return undefined;
    }
  };

  const RemoveItem = ()=>{
    try {
      localStorage.removeItem('user')
    }
    catch (err) {
      return undefined;
    }
  }

 
  
   const items = [
         {
      label: "Search",
      icon: "pi pi-filter",
      command: (event)=>{
        return handleClick(event)
      }
    },
    {
      label: "favourites",
      icon: "pi pi-star",
     
    },

    {
      label: "Log In",
      icon: "pi pi-fw pi-user",
      command: (event) => {
        window.location.pathname = "/login";
    },
  },
    {
      label: "register",
      icon: "pi pi-fw pi-user",
      command: (event) => {
        window.location.pathname = "/register";
    },
   
    },
  ]; 

  return (
    <div className="card">
      <Menubar
        model={items}
        start={<InputText placeholder="Search" type="text" onChange={(e)=>{handleChange(e)}}/>}
        end={
          <Button
            label="Logout"
            icon="pi pi-power-off"
            className="p-button-raised p-button-rounded"
            onClick={RemoveItem}
          />
        }
      />
    
    </div>
  )
};
//<Button label="Proceed" className="p-button-raised p-button-rounded" />
