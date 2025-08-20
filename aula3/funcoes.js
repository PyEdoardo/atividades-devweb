/* Funções Normais */
function soma(param1, param2) {
    let valor = param1 + param2;
    return valor;
}

/* Função Anônima Antiga */

let soma2 = function(param1, param2) {
    return param1 + param2;
}

/* Arrow Function | Novo tipo de função anônima */

const soma3 = (param1, param2, param3) => {
    param1 + param2 + param3;
}

/* Funções sem parâmetros */

function digaOi() {
    return 'Oi';
}

const digaOi2 = () => 'Oi';


