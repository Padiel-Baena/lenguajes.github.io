
let num
num= prompt("Dime un numero : ")

if(parseInt(num)){
    if(num % 2 == 0){
        document.writeln("El numero es par")
    }else{
        document.writeln("El numero es impar")
    }
}