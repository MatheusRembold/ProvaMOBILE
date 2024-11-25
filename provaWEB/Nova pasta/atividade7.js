let valores = [2, 10, 11, 14, 20, 23]

function filtrarImpar(valores){
    return valores.filter(numero => numero % 2 !== 0)
}

let impares = filtrarImpar(valores)

console.log(impares)