let texto = "Estou aqui para separar as vogais da frase."

function soma(texto) {
    texto = texto.toLowerCase()
    const vogais = texto.match(/[aeiou]/gi)
    const cont = vogais.length;

    return cont
}

console.log(soma(texto))