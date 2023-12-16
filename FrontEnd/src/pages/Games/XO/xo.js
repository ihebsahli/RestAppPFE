import React, { Fragment } from 'react'
import Tictac from "./tictac"
import './tictac.css';

const xo = () => {
  return (

    <Fragment >
       <h1 className='letsgo'>LET'S <span className='letsgo2'>GO !!!!</span></h1>
       <p className='tic'>Tic Tac Toe est un jeu de plateau classique où deux joueurs essaient de placer trois X ou trois O en ligne horizontale, <br></br>
                          verticale ou diagonale avant l'autre joueur.</p>

      <Tictac />
      

  </Fragment>
  )
}

export default xo
