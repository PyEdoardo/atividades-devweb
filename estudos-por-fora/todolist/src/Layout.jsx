import { Link, useNavigate } from "react-router-dom";
import './Layout.css'

export const Layout = () => {

    let navigate = useNavigate();
    return (
        <div className="page">
            <h1 className="titulo-sombra">Página Inicial</h1>
            <div className="container">
                <ul>
                    <li>
                        <Link className="link-calc" to='/Calculadora'>Calculadora</Link>
                    </li>
                    <li>
                        <Link className="link-calc-hex" to='/CalculadoraHex'>Calculadora de Conversão</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Layout;