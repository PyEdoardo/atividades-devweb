import { Link, useNavigate } from "react-router-dom";
import { FaCalculator, FaMoon, FaSun, FaWrench, FaRuler } from "react-icons/fa";
import { useEffect, useState } from "react";
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);

    const ligarModoNoturno = () => setDarkMode(!darkMode);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("bg-dark", "text-white");
            document.body.classList.remove("bg-light", "text-dark");
        } else {
            document.body.classList.add("bg-light", "text-dark");
            document.body.classList.remove("bg-dark", "text-white");
        }
    }, [darkMode]);

    let navigate = useNavigate();
    return (
        <div>
            <h1>Página Inicial</h1>
            <div className="form-check form-switch custom-switch d-flex align-items-center gap-2">
            <input type="checkbox" className="form-check-input" id="darkModeSwitch" checked={darkMode} onChange={ligarModoNoturno}/>
            <label htmlFor="darkModeSwitch">{darkMode ? <FaMoon color="yellow" size={20}/> : <FaSun color="yellow" size={20}/>}</label>
            </div>
            <div className={darkMode ? "container p-4 my-4 bg-secondary rounded shadow" : "container p-4 my-4 bg-light border rounded shadow"}>
                <div className="d-flex gap-3">

                        <button className={darkMode ? "btn btn-outline-dark d-flex align-items-center gap-2" : "btn btn-outline-primary d-flex align-items-center gap-2"} onClick={() => navigate("/Calculadora")}>
                            {darkMode ? <FaCalculator  size={18}/> : <FaCalculator size={18}/>}
                            Calculadora
                        </button>

                        <button className={darkMode ? "btn btn-outline-dark d-flex align-items-center gap-2" : "btn btn-outline-primary d-flex align-items-center gap-2"} onClick={() => navigate("/CalculadoraHex")}>
                            <FaWrench size={18}/>
                            Conversor de Bases
                        </button>

                        <button className={darkMode ? "btn btn-outline-dark d-flex align-items-center gap-2" : "btn btn-outline-danger d-flex align-items-center gap-2"} onClick={() => navigate("/")}>
                            {darkMode ? <FaRuler color="black" size={18}/> : <FaRuler color="red" size={18}/>}
                            Conversor de Medidas
                        </button>

               </div>
            </div>
        </div>
    );
}

export default Layout;