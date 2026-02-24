const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',
    'T'];
let correcto = false;
let numDni
    numDni= prompt("Dime el numero de Dni : ")
for (let i = 1; i <= numDni.length-1; i++) {
    if (numDni[i] ) {}
}
while (numDni.length !== 9) {
    alert("Los numero de dni solo son 8 digitos")
    prompt("Dime el numero de Dni (solo el numero) : ")
}
let Letra = letra[numDni , letras]



function letra(numDni, letras) {
    let resto = numDni % 23
    let letra = letras[resto]
}