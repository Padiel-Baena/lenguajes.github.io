let tablero = "";
let tamanyo = 8;

for( let i = 0; i < tamanyo; i++ ){
    for( let j = 0; j < tamanyo; j++ ){
        if( (i +j) % 2 !== 0 ){
            tablero += " "
        }else{
            tablero += "#"
        }
    }
    tablero += "\n"
}
console.log(tablero);