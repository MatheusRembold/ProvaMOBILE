
let valores = [2, 10, 11, 14, 20, 23]

function impar_ou_par(valor) {
    if(valor % 2 == 0){
    console.log("Par") }
    else {
        console.log("Impar")
    }
}

valores.map(impar_ou_par)
