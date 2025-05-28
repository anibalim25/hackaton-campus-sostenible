import { Routes, Route, Router } from 'react-router-dom';
import Home from './Home';
import Lista from './Lista';
import Contenedor from './Contenedor';
function App() {

  return (
    <>
      <Contenedor edificio={"ETSISI"} ubi={"Bloque 3, Piso II"} llenado={87} tipo={"Envases"}/>
    </>
  )
}

export default App

