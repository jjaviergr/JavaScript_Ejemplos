/*
 * Ejercicio 5
 */

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni="75238231";

var letra="C";

var letra_dni=dni%23;

if (letras[letra_dni]==letra)
    alert("\nLa letra coincide con la del DNI");
else
     alert("\nLa letra no coincide con la del DNI");
