let simbolo;

for (let i = 1; i <= 7; i++) {
    if( i % 2 === 0) {
        simbolo = "+"
        console.log(simbolo.repeat(i))
    }else{
        simbolo = "#"
        console.log(simbolo.repeat(i))
    }
}