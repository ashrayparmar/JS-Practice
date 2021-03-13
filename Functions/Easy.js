// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const powerOfNumber = (a,b) => {
    var pow = 1;
    for(var i=0;i<b; i++) {
        pow=pow*a;
    }
    return pow;
}

// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (side) => {
    return 4.71 * side * side
}

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const numberOfWords = (string) => {
    var count = 1;
    for(var i=0; i<string.length; i++) {
        if(string[i] === " ") {
            count += 1;
        }
    }
    return count;
}

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

function findMin(...arg) {
    return Math.min(...arg)
}

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9

function findMax(...arg) {
    return Math.max(...arg);
}

// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

const typeOfTriangle = (a,b,c) => {
    if(a==b & b==c && c==a) {
        return "Equilateral Triangle";
    } 
    else if (a == b || b == c || c == a ) {
        return "Isosceles Triangle";
    } else {
        return "Scalen Triamgle"
    }
}