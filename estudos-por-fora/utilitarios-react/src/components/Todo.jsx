import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { FaTasks, FaSun, FaMoon } from 'react-icons/fa'

export const Todo = () => {

    const [darkMode, setDarkMode] = useState(false);

    const ligarModoNoturno = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        document.title = "Todo List";
        if (darkMode){
            document.body.classList.add("bg-dark", "text-white");
            document.body.classList.remove("bg-light", "text-dark");
        } else {
            document.body.classList.add("bg-light", "text-dark");
            document.body.classList.remove("bg-dark", "text-white");
        }
    });

    return (
        <div className="container">
            <h1>Lista de Tarefas</h1>
            <div className="form-check form-switch custom-switch d-flex align-items-center gap-2">
                        <input type="checkbox" className="form-check-input" id="darkModeSwitch" checked={darkMode} onChange={ligarModoNoturno}/>
                        <label htmlFor="darkModeSwitch">{darkMode ? <FaMoon color="yellow" size={20}/> : <FaSun color="yellow" size={20}/>}</label>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'><FaTasks></FaTasks></span>
                <input type='text' className='form-control' placeholder='Digite o nome da Tarefa' aria-describedby='basic-addon1'></input>
            </div>
        </div>
    );
}

export default Todo