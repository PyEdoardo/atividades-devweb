import { Link, Router } from 'react-router-dom';
import './Calculadora.css'
import React, { useState } from "react";

    function Calculadora(){

    const [valor, setValor] = useState("");
    const [historico, setHistorico] = useState<string[]>([]);
    const [mostrarHistorico, setMostrarHistorico] = useState(false);

    const adicionar = (numero: string): void => {
        let novoValor = valor;
        setValor(novoValor += numero);
    }

    const apagarTudo = (): void => {
        setValor("");
    }

    const voltarUm = (): void => {
        let novoValor = valor.slice(0, -1);
        setValor(novoValor);
    }

    const calcular = (): void => {
        try {
            const resultado = eval(valor);
            setHistorico([`${valor} = ${resultado}`, ...historico]);
            setValor(resultado);
        } catch {
            setValor("Erro!");
        }
    }

    const voltarHistorico = (expressao: string): void => {
        setValor(expressao.split('=')[0].trim());
    }

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className="container">
                <h1>Calculadora</h1>
                <button style={{marginBottom: 10}} onClick={() => setMostrarHistorico(!mostrarHistorico)}>
                    {mostrarHistorico ? 'Ocultar Histórico' : 'Mostrar Histórico'}
                </button>
                {mostrarHistorico && (
                    <div style={{
                        background: '#131111ff',
                        border: '1px solid #0f0e0eff',
                        borderRadius: 8,
                        marginBottom: 16,
                        padding: 10,
                        maxHeight: 180,
                        overflowY: 'auto',
                        textAlign: 'left',
                        fontSize: 15
                    }}>
                        <b>Histórico:</b>
                        <ul style={{margin: 0, paddingLeft: 18}}>
                            {historico.length === 0 && <li style={{color:'#888'}}>Nenhuma operação ainda.</li>}
                            {historico.map((item, idx) => (
                                <div>
                                <li key={idx}>{item}</li>
                                <button onClick={() => voltarHistorico(item)}></button>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='calculadora'>
                    <input readOnly id='display' type='text' value={valor}/>
                    <div className='botoes'>
                        <button id="btn-c" className="operador" onClick={() => apagarTudo()}>C</button>
                        <button id="btn-del" className="operador" onClick={() => voltarUm()}>←</button>
                        <button className="operador" onClick={() => adicionar('%')}>%</button>
                        <button className="operador" onClick={() => adicionar('/')}>/</button>

                        <button className="numero" onClick={() => adicionar('7')}>7</button>
                        <button className="numero" onClick={() => adicionar('8')}>8</button>
                        <button className="numero" onClick={() => adicionar('9')}>9</button>
                        <button className="operador" onClick={() => adicionar('*')}>*</button>

                        <button className="numero" onClick={() => adicionar('4')}>4</button>
                        <button className="numero" onClick={() => adicionar('5')}>5</button>
                        <button className="numero" onClick={() => adicionar('6')}>6</button>
                        <button className="operador" onClick={() => adicionar('-')}>-</button>

                        <button className="numero" onClick={() => adicionar('1')}>1</button>
                        <button className="numero" onClick={() => adicionar('2')}>2</button>
                        <button className="numero" onClick={() => adicionar('3')}>3</button>
                        <button className="operador" onClick={() => adicionar('+')}>+</button>

                        <button className="zero numero" onClick={() => adicionar('0')}>0</button>
                        <button className="numero" onClick={() => adicionar('.')}>.</button>
                        <button id="btn-equal" className="operador" onClick={() => calcular()}>=</button>
                        <Link to='/CalcHex'>Calculadora Hex</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Calculadora;