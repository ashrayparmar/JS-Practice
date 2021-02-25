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

 //Write a program to take a number input from user and print multiplication table 12 times for that number.

var user = readlineSync.question("Enter any number : ");

for(var i=1; i<=12; ++i) {
  console.log(user*i);
}

//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const number = parseInt(prompt('Enter the number of terms: '));
let n11 = 0, n22 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n11);
    nextTerm = n11 + n22;
    n11 = n22;
    n22 = nextTerm;
}


