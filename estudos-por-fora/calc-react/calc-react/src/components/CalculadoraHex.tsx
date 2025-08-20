import React ,{ useState } from "react";

function CalculadoraHex() {
    const [valor, setValor] = useState("");

    return (<>
    <div className="container">
        <h1>Calculadora Hex</h1>
        <div className="Calculadora">
            <input readOnly id='display' type="text" value={valor}></input>
            <button className="numero"></button>
        </div>
    </div>
    </>)
}

export default CalculadoraHex;