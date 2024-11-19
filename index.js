import cesar from './cesar.js';

const mensagem = "oi";
const chave = 3;

const textoCriptografado = cesar.criptografia(mensagem, chave, cesar.cifraLetra);
console.log("texto criptografado:", textoCriptografado);

const textoDescriptografado = cesar.criptografia(textoCriptografado, chave, cesar.decifraLetra);
console.log("texto descriptografado:", textoDescriptografado);