/*
1/ Scrivi un programma che stampi i numeri da 1 a 100

2/ ma per i multipli di 3 stampi "Fizz" al posto del numero e 

3/ per i multipli di 5 stampi Buzz

4/ Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//var declarations
var fizz = "Fizz";
var buzz = "Buzz";

//print loop
for (var i = 1; i <= 100; i++) {

    if (i%3 == 0 && i%5 != 0) {
        document.getElementById("list").innerHTML += "<li>" + fizz + "</li>";
    } else if (i%5 == 0 && i%3 != 0) {
        document.getElementById("list").innerHTML += "<li>" + buzz + "</li>";
    } else if (i%5 == 0 && i%3 == 0) {
        document.getElementById("list").innerHTML += "<li>" + fizz + buzz + "</li>";
    } else {
        document.getElementById("list").innerHTML += "<li>" + i + "</li>";
    }
}