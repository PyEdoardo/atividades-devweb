

export const Previsao = () => {
    const [prev, setPrev] = useState({});
    const [cidade, setCidade] = useState('');

    const atualizarPrev = () => {
        setPrev(getPrevisaoDoTempo(cidade));
    }

    return (
        <>
        <div className="bg-white">
            <input>ss</input>
        </div>
        </>
    );
}

export default Previsao;