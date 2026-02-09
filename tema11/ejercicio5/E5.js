/*
Crea un programa que solicite una edad al usuario y muestre por pantalla si el usuario es
menor de edad ( menor de 18 años), adult@ (entre 18 y 65) o jubilad@ (mayor de 65).
 */

let edad ;
edad = prompt("Dime una EDAD : ")

if (parseInt(edad)) {
    if(edad <18){
        alert("ERES MENOR DE EDAD")
        document.writeln("Menor de edad")
    }else if(edad >= 65){
        alert("ESTAS JUBILADO")
        document.writeln("Jubilado")
    }else{
        alert("ERES ADULTO")
        document.writeln("ADULTO")
    }
}else{
    alert("TE HE PEDIDO UNA EDAD")
}