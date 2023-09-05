import React from 'react';
import './App.css'
import './style.css';
import { CarruselGaleria } from './componentes/Galeria'

export default function App() {
  return (
    <>
    <div className="contenedor-principal">
     <CarruselGaleria
     botontext1="Siguiente"
     botontext2="Anterior" />
    </div>
    </>
  );
}
