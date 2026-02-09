/*
Crea un programa que solicite una nota numérica entre 0 y 10. Posteriormente, debe
mostrar la calificación según la nota (fíjate bien en los límites entre las calificaciones) :
a. 0-3: Insuficiente
b. 3-5: Regular
c. 5-6: Suficiente
d. 6-7: Bien
e. 7-9: Muy bien
f. 9-10: Excelente
 */


let nota ;
nota = prompt("Dime una nota.Recuerda que tiene que ser entre 1 y 10 : ")

if (parseInt(nota)) {

    if (nota >= 0 && nota < 3) {
        alert("Esa nota es muy baja")
        document.writeln("INSUFICIENTE")
    } else if (nota >= 3 && nota < 5) {

        alert("Esa nota es baja")
        document.writeln("REGULAR")
    } else if (nota >= 5 && nota < 6) {
        alert("Estas aprobado")
        document.writeln("SUFICIENTE")
    } else if (nota >= 6 && nota < 7) {
        alert("Esta bien")
        document.writeln("BIEN")
    } else if (nota >= 7 && nota < 9) {
        alert("Esta muy bien")
        document.writeln("MUY BIEN")
    } else if (nota >= 9 && nota < 10) {
        alert("ESO ESTA MUY BIEN, SIGUE ASI")
        document.writeln("EXCELENTE")
    }
}else{
    alert("ERROR : TE HE PEDIDO UNA NOTA")
}