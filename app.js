//Since we need to implentment jQuery with Javascript we start off with $(document).ready(function() { insert javascript conditions and iterations.}
$(document).ready(function() {
	//Creating a for loop for 1 to 100 starting with i = 1 and iterating to i++ until up to 100
	for (var i=1; i <= 100; i++){
	if (i % 15 === 0) //means if for any i that is modulus by 3 and also i that is modulus by 5 is striclty zero.
		document.write("<p> FizzBuzz </p>");//write out message FizzBuzz for all numbers that are both and true for 3 and 5 
	else if (i % 3 === 0)//means for all i that is modulus to 3 that is strictly zero.
		document.write("<p> Fizz </p>");//writes out Fizz
	else if (i % 5 === 0)// means for all i that is modulus to 5 that is strictly zero.
		document.write("<p> Buzz</p>");//writes out Buzz for all numbers that are modulus by 5 is strictly zero.
	else
		document.write("<p>" + i + "</p>");//write a number out if it is not within the other conditions above.
	}		
});

//useful links help on assignment/challenge http://www.w3schools.com/js/js_comparisons.asp,  

//Question and assignment:
//In this assignment, you'll build a FizzBuzz app from scratch. In the original game of Fizz Buzz, you count from 1 to a given number (let's say 100). 
//For each number if it's not divisible by 3 or 5, you simply say the number. If it's divisible by 3, instead of the number you say "fizz". If it's divisible by 5, 
//you say "buzz". And finally if 
//it's divisible by both 3 and 5, you say "fizz buzz". So, counting from 1 to 15, you'd say: "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, 
//fizz buzz".

