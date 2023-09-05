import React from 'react';
import { LolList } from '../componentes/Data.js'
import { useState } from 'react';
import '../styles/carrusel.css'

export function CarruselGaleria ({ botontext1,botontext2 }) {
  const [index, setIndex] = useState(0);
  const [mostrarMas, setMostrarMas] = useState(false);

  let anterior = index > 0;
  let siguiente = index < LolList.length - 1;

  function handleAnteriorClick() {
    if (anterior) {
      setIndex(index - 1);
    }}

    function handleSiguienteClick() {
      if (siguiente) {
        setIndex(index + 1);
      }
    }

    function handleMostrarMas() {
    setMostrarMas(!mostrarMas)
  }
  

    let lol = LolList[index];

    return(
      
      <>
      <button
        onClick={handleAnteriorClick}
        disabled={!anterior}
        className="boton-anterior"
      >
        {botontext2}
      </button>

      
      <button onClick={handleSiguienteClick} disabled={!siguiente} className="boton-siguiente">
        {botontext1}
      </button>

      <h1> <i>{lol.name}</i></h1>

      <img 
        src={lol.url} 
        alt={lol.alt}
      />

      <button onClick={handleMostrarMas} className="boton-detalles">
          {mostrarMas ? 'Menos' : 'Mas'} detalles
      </button>
      {mostrarMas && <p> {lol.historia} </p>}
      </>
    )
  }

  