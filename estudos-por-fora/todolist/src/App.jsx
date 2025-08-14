import { BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import './App.css'
import Calculadora from './Calculadora'
import CalculadoraHexa from './CalculadoraHexa'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout></Layout>}></Route>
      <Route path='/Calculadora' element={<Calculadora></Calculadora>}></Route>
      <Route path='/CalculadoraHexa' element={<CalculadoraHexa></CalculadoraHexa>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
