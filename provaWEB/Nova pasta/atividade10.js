function ordenarPorComprimento(array) {
    return array.sort((a, b) => a.length - b.length);
}


const strings = ["banana", "kiwi", "apple", "grape"];
const resultado = ordenarPorComprimento(strings);
console.log(resultado);
