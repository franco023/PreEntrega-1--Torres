function sumatrimestres(uno,dos,tres){
    let sumatrimestres = uno + dos + tres
    console.log ("nota final de" + nombreCompleto + ":"+sumatrimestres);
}
//ALUMNOS
let nombre = prompt("ingrese nombre del alumno");
let apellido = prompt("ingrese apellido del alumno");
let nombreCompleto = (nombre + " " + apellido);
alert("ingrese las notas de" + " " + nombreCompleto);
console.log("notas de" + " " + nombreCompleto);

//NOTAS TRIMESTRALES
let primerTrimestre = prompt("primer trimestre");
let segundoTrimestre = prompt("segundo trimestre");
let tercerTrimestre = prompt("tercer trimestre");

let parseado1 = parseInt(primerTrimestre);
let parseado2 = parseInt(segundoTrimestre);
let parseado3 = parseInt(tercerTrimestre);

//NO SE INGRESO UN NUMERO
if (parseado1) {
} else {
    alert("el valor ingresado no es un numero");
    primerTrimestre = prompt("primer trimestre");
    parseado1 = parseInt(primerTrimestre);
}

if (parseado2) {
} else {
    alert("el valor ingresado no es un numero");
    segundoTrimestre = prompt("segundo trimestre");
    parseado2 = parseInt(segundoTrimestre);
}

if (parseado3) {
} else {
    alert("el valor ingresado no es un numero");
    tercerTrimestre = prompt("tercer trimestre");
    parseado3 = parseInt(tercerTrimestre);
}

//NOTA FINAL

console.log(parseado1);
console.log(parseado2);
console.log(parseado3);

sumatrimestres(parseado1,parseado2,parseado3);
 
let notaFinal = parseInt(parseado1 + parseado2 + parseado3);

if (notaFinal >= 7) {
    console.log(nombreCompleto + " " + "-APROBADO");
} else {
    console.log(nombreCompleto + " " + "-DESAPROBADO");
}
