// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../Components/Card'
import { usecontextGlobal } from '../Components/utils/GlobalContext.jsx'




const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const {dentistState} = usecontextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistState.dentistsList.map(dentist => (<Card dentist={dentist} key ={dentist.id}/>))}
      </div>
    </main>
  )
}

export default Home
