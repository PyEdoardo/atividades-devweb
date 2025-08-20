import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora';
import CalculadoraHex from './components/CalculadoraHex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Calc' element={<Calculadora/>}></Route>
      <Route path='/CalcHex' element={<CalculadoraHex/>}></Route>
      </Routes></BrowserRouter>
    </>
  );
}

export default App
