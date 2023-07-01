/* eslint-disable no-unused-vars */

import React from "react"
import { Link } from "react-router-dom"


import { usecontextGlobal } from '../Components/utils/GlobalContext'

// eslint-disable-next-line react/prop-types
const Card = ({ name, username, id }) => {
  // const {dentistDispatch} = usecontextGlobal()
  const {dentistState,dentistDispatch} = usecontextGlobal()
  const addFav = ()=>{

    const storage = localStorage.getItem("favs");
    const listFavs = storage ? JSON.parse(storage) : [];
  
    listFavs.push({ id: id, username:username, name:name });
 
    localStorage.setItem('favs', JSON.stringify(listFavs));

    
  
    // return dentistDispatch({type:'DENTIST_LIKE', payload:listFavs.id})

  }
  

  return (
    
      <div className="card">
        <Link key={id}to={'/detalle/' +id} style={{ textDecoration: 'none'}}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src=" ../images/doctor.jpg" alt='Doctor' style={{width:'100%'}}/>
        <h1>{name}</h1>
        <h2 style={{textAlign:'center'}}>{username}</h2>
     
  
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        </Link>
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
      </div>   
      
  )
}

export default Card