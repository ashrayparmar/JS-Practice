//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

for (var i=1; i <= 100; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

//Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *

for(var i=1; i<=5; i++){
    console.log("*".repeat(i));
 }