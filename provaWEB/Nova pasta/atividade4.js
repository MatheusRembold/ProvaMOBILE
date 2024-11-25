let text = "frase bolada"

function inverter(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}

console.log(inverter(text))