// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

var arr = [5,13,7,21,48];
var sum = 0;
var i;

 for(i=0; i<arr.length; i++) {
   sum +=arr[i];
 }
 console.log(sum);

//Write a program to take a number input from user and determine whether the number is odd or even.

var readlineSync = require('readline-sync');
var userInput = readlineSync.question("Enter any number : ");

if( userInput % 2 === 0) {
  console.log("It is an even Number")
} else {
  console.log("It is an odd number")
}

//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

var num1 = 129;
var num2 = 251;

if(num1 > num2) {
  console.log("Maximum number is: "+ num1)
} else {
  console.log("Maximum number is: "+ num2) 
}

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

var n1=8, n2=23, n3=17;

if(n1 > n2 && n1 > n3) {
  console.log("Greatest no is : " + n1);
} else if(n2 > n1 && n2 > n3) {
  console.log("Greatest no is: "+ n2);
} else {
  console.log("Greates no is : "+n3)
}

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let number1=35, number2=29, number3=46;

if(number1 < number2 && number1 < number3) {
  console.log("Minnimum no. is : "+number1);
} else if(number2 < number1 && number2 < number3) {
  console.log("Minnimum no. is : "+number2);
} else {
    console.log("Minnimum no. is : "+number3);
}

//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

var userInputMonth = readlineSync.question("Enter month name : ");

if (userInputMonth.toUpperCase() == "january" || "march" || "may" || "june" || "august" || "october" || "december") {
  console.log(`Yes ${userInputMonth} month has 31 days`)
}



