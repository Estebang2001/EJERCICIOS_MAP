/* Ejercicio 1
Tenemos un arreglo de números en la variable numbers y deberás crear uno nuevo que contenga el doble de cada número, usando .map(). */

let numbers = [3, 7, 13, 99]

let dobles = numbers.map(function (num) {
     return num*2
} )

console.log(dobles)

/* Ejercicio 2
Tenemos un arreglo en la variable frases con varias sentencias al azar. Usá la función map() para que cada frase empiece y termine con signos de exclamación.*/

let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let exclamación = frases.map(function(frase){
    return `¡${frase}!`
})

console.log (exclamación)