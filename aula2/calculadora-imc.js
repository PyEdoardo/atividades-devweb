const peso = 80;

const altura = 1.89;

const resultado = peso / (altura ** 2);

if (resultado < 18){
    console.log('Abaixo do Peso | IMC: ' + resultado)
}
else if (resultado < 21){
    console.log('Dentro do Peso | IMC: ' + resultado)
}
else if (resultado < 24){
    console.log('Sobrepeso | IMC: ' + resultado)
}
else {
    console.log('Acima do Peso | IMC: ' + resultado)
}