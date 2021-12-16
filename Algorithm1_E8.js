//Ejercicio #1 
//Create a function that takes in one number and checks if the number is greater than 10. Print  out to the console true if it is greater and false otherwise. 
let num = parseInt(prompt("Introduce un numero")); 
if(num>=10){ 
console.log("true"); 
} else{ 
console.log("false"); 
}

//Ejercicio #2 
//Create a function that takes in one number and checks if it is divisible by 4 or divisible by 9.  Print out to the console true if a number if divisible by 4 or 9, and false if a number is not divisible by either number. 
let num = parseInt(prompt('numero')); 
let residuo = num % 4; 
let residuo2 = num % 9; 
If (residuo == 0 || residuo2 == 0){ 
Console.log(true); 
} else{ 
Console.log(false);
}

//String Function 
//Ejercicio #1 
//We want to check if a string is empty. If a string is not empty, we want to print out the first  character of that string. If a string is empty, print out a text saying "This string is empty". 
function checkEmptyString(str) { 
 if(str){ 
 console.log(str.charAt(0)); 
 }else{ 
 console.log("This string is empty"); 
 } 
} 
// Example test, should return a 
checkEmptyString("apple"); 

//Ejercicio #2 
//We want to compare two strings and check if they are the same - case insensitive.* Return a boolean - true if the two strings are the same, and false if they are not. 
function checkTwoStringsSame(str1, str2) { 
} 
let cad1 = prompt('contraseña'); 
let cad2 = prompt('escribe nuevamente tu contraseña'); 
function validar2(password1,password2){ 
 if (password1==password2){ 
 console.log(true); 
 } else { 
 console.log(false); 
 } 
} 
validar2(cad1,cad2)
// Example test, should return true 
checkTwoStringsSame("String1", "string1"); 

//User Input 
//Create a function that takes in 2 inputs (using prompt) and goes through the 5 arithmetic  operators (+, -, /, *, %). The expected output on the console is: 
/* `The sum is x` -> x is the calculated sum 
* `The subtraction is y` -> y is the calculated difference 
* `The multiplication is z` -> z is the calculated multiplication 
* `The division is w` -> w is the calculated division 
* `The remainder is q` -> q is the calculated remainder */
function mathematicOperations() { 
 let dato1= parseInt(prompt("Ingrese el primer numero:"));  let dato2=parseInt(prompt("Ingrese el segundo numero:"))  suma=dato1+dato2; 
 alert("La suma es:"+suma);  
resta=dato1-dato2; 
 alert("La resta es:"+resta);
 mult=dato1*dato2; 
 alert("la multiplicación es:"+mult); 
 div=dato1/dato2; 
 alert("La división es:"+div);  
 rem=dato1%dato2; 
 alert("El restante es:"+rem) 
} 
mathematicOperations(); 

/*PRACTICA 1 
1. Open a repl.it Javascript page and call it Algorithms Introduction Exercise 1. 2. Write a program where a user enters the number of tasks they have completed.  The program returns one of the following labels to the console: 
**Failed** 
**Insufficient** 
**Good** 
**Excellent** 
**Error** 
based on the conditions: 
• Failed if they scored 6 or less 
• Insufficient if they scored > 6 but less than 9 (9 included) 
• Good if they scored > 9 but less than 14 (14 included) 
• Excellent if they scored 15
• Error if participants enter a negative number or a number outside the range  supported (outside 0 - 15) */
 let dato=prompt("Añade el numero de tareas:"); 
 if(dato==0&&dato<=6){ 
 alert("Failed") 
 } else 
 if(dato>6&&dato<=9){ 
 alert("Insufficient") 
 } 
 else 
 if(dato>9&&dato<=14){ 
 alert("good")  
 } 
 else 
 if(dato==15){ 
 alert("Excelent") 
 } 
 else 
 if(dato<0){ 
 alert("error") 
 } 
 else 
 if(dato>15){ 
 alert("error") 
 }

 /*PRACTICA 2 
1. Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2. 2. Write an algorithm to find the largest among 5 different numbers entered by the  user. 
3. Print out the largest number to the console. */
let n=5; // Longitud del array 
 let numero=[]; // Declarando el array 
 
 // Ciclo para escanear los números 
 for(let i=0;i<n;i++){ 
 numero[i] = parseInt(prompt("Ingrese un número: ")); 
} 
 
let maximo=numero[0]; // Declara como maximo el primer elemento del array 13. 
// Ciclo para determinar el máximo 
for(let i=1;i<n;i++){ 
 if(numero[i]>maximo){ // Condicional para saber si el número es mayor  o no
 maximo=numero[i];  
 } 
} 
 
console.log("El máximo es: " + maximo); 

/*PRACTICA 3 
1. Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3. 2. We have 3 items and we know the price for each. However, we can only buy the  two least expensive items. 
3. Write an algorithm that takes in three user inputs and outputs the two smallest  prices to the console. */
let articulo1 = parseInt(prompt("Introduce el precio del artículo: ")); let articulo2 = parseInt(prompt("Introduce el precio del artículo: ")); let articulo3 = parseInt(prompt("Introduce el precio del artículo: ")); 
let articulos = [articulo1,articulo2,articulo3]; 
articulos.sort();
articulos.splice(0,1); 
console.log("Articulo 1-> " + articulos[0] + "\n" + 
"Articulo 2-> " + articulos[1] + "\n");



