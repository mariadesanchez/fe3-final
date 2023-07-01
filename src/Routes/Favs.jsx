/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// eslint-disable-next-line no-unused-vars
import { usecontextGlobal } from '../Components/utils/GlobalContext'
function Favs() {
  const storage = JSON.parse(localStorage.getItem('favs'))

  // const {dentistState} = usecontextGlobal()
// eslint-disable-next-line no-unused-vars

  return (
 

    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       <ul>
    
        {/* Aqui deberias renderizar las cards */}
      

       {storage.map(fav => 
       <Link key={fav.id} to={'/detalle/' + fav.id}>
        <li>{fav.name}</li>
        </Link>)}
        </ul>
      </div>
     
    </>
  );
   

}

export default Favs;
