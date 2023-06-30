/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
// eslint-disable-next-line no-unused-vars
import { usecontextGlobal } from '../Components/utils/GlobalContext'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()

 // eslint-disable-next-line no-unused-vars
 const {dentistDispatch, dentistState} = usecontextGlobal()
 


  return (
    <div className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <div className='links' style={{margin:'24px'}} >
            <h4 onClick={() => navigate(-1)}>↩Back</h4>
            <Link to={routes.home}><h4 className='link' style={{margin:'24px'}}>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link' style={{margin:'24px'}}>Contact</h4></Link>
            <Link to={routes.favs}><h4 className='link'style={{margin:'24px'}}>Favs</h4></Link>
            
           {dentistState.dentistTheme?

            <button  style={{backgroundColor:'black', color:'white',borderRadius:'10px'}}
            onClick={() => dentistDispatch({type: 'THEME', payload:dentistState.dentistTheme?false:true})}
           >Modo Oscuro</button>:
           
           <button className='dark' style={{backgroundColor:'white', color:'black',borderRadius:'10px'}} 
           onClick={() => dentistDispatch({type: 'THEME', payload:dentistState.dentistTheme?false:true})}
           >Modo Claro</button>}
      </div>
        
      

      
     
    </div>
  )
}

export default Navbar

