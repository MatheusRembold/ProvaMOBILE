let valores = [7, 6, 9]


function media_A(valores) {
    let quantidadeV = valores.length
    let soma = valores.reduce((acc, valor) => acc + valor, 0)
    let divisao = soma / quantidadeV

    return divisao

}

console.log(media_A(valores))