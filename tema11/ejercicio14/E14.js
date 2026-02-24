let texto = "Fútbol en Francia";
console.log(texto);
let ubicacion = 1;
let letra = texto[ubicacion];

console.log("El caracter de la posicion 2 es : " + letra);

contarFs(texto);

function contarFs(texto){
    let cont = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === "F"){
            cont++;
        }
    }
    console.log("En la palabra " + texto + " hay un total de " + cont + " F");
}