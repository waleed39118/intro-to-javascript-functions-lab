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