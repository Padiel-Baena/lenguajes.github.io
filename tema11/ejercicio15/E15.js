let num1 = prompt("Dime un numero entero : ")
let num2 = prompt("Dime otro numero entero : ")

let fin = false

while (!fin){
    if (num1 > num2){
        alert("El primer numero es mayor\nDime otros dos numeros")
        num1 = prompt("Dime un numero entero : ")
        num2 = prompt("Dime otro numero entero : ")
    }else if(num1 === num2){
        alert("El ambos numeros son iguales \nDime otros dos numeros")
        num1 = prompt("Dime un numero entero : ")
        num2 = prompt("Dime otro numero entero : ")
    }else{
        alert("El segundo numero es mayor\nFinalizando programa...")
        fin = true;
    }
}