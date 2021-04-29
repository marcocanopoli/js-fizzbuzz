/*
1/ Scrivi un programma che stampi i numeri da 1 a 100

2/ ma per i multipli di 3 stampi "Fizz" al posto del numero e 

3/ per i multipli di 5 stampi Buzz

4/ Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//var declarations
var fizz = "Fizz";
var buzz = "Buzz";

//console print loop
for (var i = 1; i <= 100; i++) {

    if (i%3 == 0 && i%5 != 0) {
        console.log(fizz)
    } else if (i%5 == 0 && i%3 != 0) {
        console.log(buzz)
    } else if (i%5 == 0 && i%3 == 0) {
        console.log(fizz + buzz)
    } else {
        console.log(i);
    }
}