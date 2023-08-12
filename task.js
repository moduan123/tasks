//1- Check The Number Is Even or Odd
/*function typ(n){
    if(n % 2 == 0){
       return ("the number is even");
    }else{
       return ("the number is odd");
    }
}
   console.log(typ(7));*/
//---------------------------------------------
//2- Fizz Buzz Game
/*for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}*/
//----------------------------------------------
//3- Reverse String for example welcome => emoclew
/*function Reverse(str) {
    let split = str.split("");
    let reverseArray = split.reverse();
    let join = reverseArray.join("");
    return join;
}
 
console.log(Reverse ("mahmoud"));*/
 //-------------------------------------------------
 //4- Compute Circle Area and Circumference
 /*const pi=3.14159265358979323846; 
  function AreaCircle(r) {
    let Area = pi * r * r;
    return Area ;
  }
 console.log("Area of Circle is:"+AreaCircle(5));*/
 //------------------------------------------------
//5- check two given numbers and return true if one of the number is 
//50 or if their sum is 50. 
 /*function test(x, y) 
{
    if(x == 50 || y == 50 || x + y == 50){
        return true;
    }else{
        return false;
    }
  
}
console.log(test(50, 50))*/
//--------------------------------------------------- 
//6- check from two given integers, whether one is positive and 
//another one is negative.
/*function type(num1,num2){
    if((num1 < 0 && num2 > 0) || num1 > 0 && num2 < 0){
      return "the number is positive";
    }else{
        return "the number is negative";
    }
}
console.log(type(1,-4))*/
//------------------------------------------------------
//7- check whether a given positive number is a multiple of 5 or a 
//multiple of 8. 
/*function m(num){
    if(num % 5 ==0){
        return "this number is multiple of 5"
    }
    if(num % 8 ==0){
        return " this number is multiple of 8"
    }
    else{
        return"this number not multiple of 5 or multiple of 8 "
    }
}
console.log(m(16));*/
//--------------------------------------------------------
//8- find the largest of three given integers 
/*function lage(num1,num2,num3) {

    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    return largest;
}
console.log("The largest number is " + lage(1,5,3));*/
//---------------------------------------------------------
//9- Compute The sum of the numbers from 1 to 10 
/*let sum = 0;
    for(let i = 1; i <= 10; i++){
      sum += i;
      console.log(sum);
    }*/
//---------------------------------------------------------
//10- display the pattern like right angle triangle using an asterisk.
/*for(var i=1 ; i<=5;i++){
    for(var j=1;j<=i ;j++){
        console.log("*");
    }
    console.log("\n");
}*/
//---------------------------------------------------------
//11- check whether a given number is positive or negative. 
/*function check(num){
    if(num >=0){
        console.log("this number is positive.")
    }else{
        console.log("this number is negative.")
    }

}
check(-96)*/
//-------------------------------------------------------
//12- store elements in an array and print it.
/*array = ["example-1", "example-2", "example-3"];
for (let i = 0; i < array.length; i++)
  console.log( array[i]+ ": " + (i+1));*/
//------------------------------------------------------
//13-print the sum of two numbers
/*function sum(num1,num2){
    return num1+num2
}
console.log(sum(4,5))*/
//-------------------------------------------------------
//14- calculate the factorial of a given number 
/*function factorial(n) { 
    let ans = 1;   
    if(n === 0){
        return 1;
    }    
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
} 
console.log(factorial(5));*/
//------------------------------------------------------
//15- Create Simple Calculator (+ , - , * , /)
function add(firstNumber,secondNumber) {
	let result = firstNumber + secondNumber;
    return result;
}
function subtract(firstNumber,secondNumber) {
	let result = firstNumber - secondNumber;
    return result;
}
function multiply(firstNumber,secondNumber) {
	let result = firstNumber * secondNumber;
    return result;
}
function divide(firstNumber,secondNumber) {
	let result = firstNumber / secondNumber;
    return result;
}
console.log(add(5,6))
console.log(subtract(5,6))
console.log(multiply(5,6))
console.log(divide(5,6))
//----------------------------------------------------
                                      