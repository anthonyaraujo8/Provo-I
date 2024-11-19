
function cifraLetra(letra, chave) {
    if (letra.match(/[a-z]/i)) {
        const codigo = letra.charCodeAt(0);
        const base = (codigo >= 65 && codigo <= 90) ? 65 : 97;
        return String.fromCharCode(((codigo - base + chave) % 26) + base);
    }
    return letra;
}

function decifraLetra(letra, chave) {
    return cifraLetra(letra, -chave);
}

function criptografia(mensagem, chave, converter) {
    return mensagem.split('').map(char => converter(char, chave)).join('');
}

export default {cifraLetra,decifraLetra,criptografia};