import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Calculadora from './components/Calculadora'
import CalculadoraHexa from './components/CalculadoraHexa'
import Previsao from './components/Previsao'
import Conversor from './components/Conversor'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/Calculadora' element={<Calculadora/>}/>
      <Route path='/Base' element={<CalculadoraHexa/>}/>
      <Route path='/Conversor' element={<Conversor/>}/>
      <Route path='/Prev' element={<Previsao/>}/>
      <Route path='/Todo' element={<Todo/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
