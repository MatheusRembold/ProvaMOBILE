function removerDuplicados(array) {
    return [...new Set(array)];
}


const array = [1, 2, 2, 3, 4, 4, 5];
const resultado = removerDuplicados(array);
console.log(resultado); 

