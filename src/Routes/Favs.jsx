/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// eslint-disable-next-line no-unused-vars
import { usecontextGlobal } from '../Components/utils/GlobalContext'
function Favs() {
  
  const {dentistState} = usecontextGlobal()
// eslint-disable-next-line no-unused-vars

  return (
    // JSON.parse(localStorage.getItem('dentistLikeStorage'))

    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       <>
        {/* Aqui deberias renderizar las cards */}
        {dentistState.dentistLike.map(fav => <Link key={fav.id} to={'/detalle/' + fav.id}>
        <li>{fav.name}</li>
        </Link>)}
        </>
      </div>
     
    </>
  );
   

}

export default Favs;
