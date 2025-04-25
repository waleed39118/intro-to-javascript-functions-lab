// Exercise 1: maxOfTwoNumbers()

const maxOfTwoNumbers = (x, y) => {
    if (x => y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  // Exercise 2: isAdult()

  function isAdult(age) {
      if (age>=18)
      { return `Adult`;}
      else 
      { return `minor`;}
  }
  
  console.log(isAdult(15))
  console.log(isAdult(18))
  console.log(isAdult(20))
  console.log(isAdult(21))
  console.log(isAdult(5))

//   Exercise 3: isCharAVowel()

// Write a function named isCharAVowel that takes a single character as 
// an argument. It should return true if the character is a vowel and 
// false otherwise. For the purposes of this exercise, the character 
// y should not be considered a vowel.

// Example: isCharAVowel('a') should return true.

function isCharAVowel(char){
    return ['a' , 'e' , 'i' , 'o' , 'u']. includes(char.toLowerCase())
}
console.log("Exercise 3 Result:" , isCharAVowel("a"));
console.log("Exercise 3 Result:" , isCharAVowel("e"));
console.log("Exercise 3 Result:" , isCharAVowel("i"));
console.log("Exercise 3 Result:" , isCharAVowel("o"));
console.log("Exercise 3 Result:" , isCharAVowel("u"));

// Exercise 4: generateEmail()
// Create a function named generateEmail. It should take two strings: 
// a name and a domain. It should return a simple email address.

// Example: generateEmail('johnsmith', 'example.com') 
// should return 'johnsmith@example.com'.

const generateEmail = (name, domain) => {
    return `${name}@${domain}`;
  }   
  console.log("salem" , generateEmail ("salem" , "gmail.com"));
  console.log("skkhalid" , generateEmail ("salem" , "yahoo.com"));
  

  // Exercise 5: greetUser()

  // Define a function called greetUser. It should take a name and a 
  // time of day (morning, afternoon, evening) and return a personalized 
  // greeting.
  
  // Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"
  
  // Complete the exercise in the space below:
  // */
  
 const greetUser = (waleed, morning) => {
    if (morning === "morning") {
        return `Good morning, ${waleed}!`;
    } else if (morning === "afternoon") {
        return `Good afternoon, ${waleed}!`;
    } else if (morning === "evening") {
        return `Good evening, ${waleed}!`;
    } else {
        return `Hello, ${waleed}!`;
    }
 }
console.log(greetUser("waleed", "morning"));
console.log(greetUser("waleed", "afternoon"));
console.log(greetUser("waleed", "evening"));



// Exercise 6: maxOfThree()

// Define a function, maxOfThree. It should accept three numbers 
// and return the largest among them.

// Example: maxOfThree(17, 4, 9) should return 17.

// max() function, which returns the largest of zero or more numbers.
//  let num1 = 5; let num2 = 10; let num3 = 7; 
// console. log(`The largest number is ${Math. max(num1, num2, num3)}.
// console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
// console. log(`The largest number is ${Math. max(num1, num2, num3)}.
// console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
const maxOfThree = (17, 4, 9); {
  if (17 >= 4 && 17 >= 9) {
    return 17;
  } else if (4 >= 17 && 4 >= 9) {
    return 4;
  } else {
    return 9; 
  }
}
  console.log('Exercise 6 Result:', maxOfThree(17, 4, 9));




  /*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount * tipPercentage) / 100;
  }
  console.log('Exercise 7 Result:', calculateTip(50, 20));
  console.log('Exercise 7 Result:', calculateTip(100, 15));
  console.log('Exercise 7 Result:', calculateTip(200, 10));
  console.log('Exercise 7 Result:', calculateTip(75, 18));
  console.log('Exercise 7 Result:', calculateTip(50, 20));
  




/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/


const convertTemperature = (temperature, scale) => {
    if (scale === "C") {
        return (temperature * 9/5) + 32; 
    } else if (scale === "F") {
        return (temperature - 32) * 5/9; 
    } else {
        return "Invalid scale"; 
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));
console.log('Exercise 8 Result:', convertTemperature(0, "C"));
console.log('Exercise 8 Result:', convertTemperature(100, "F"));
console.log('Exercise 8 Result:', convertTemperature(50, "C"));








/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/


const basicCalculator = (num1, num2, operation) => {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "modulus"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "exponentiation"));



















