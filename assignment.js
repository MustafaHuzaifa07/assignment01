// Task 1: Check if a number is positive, negative, or zero
var number = 7;
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// Task 2: Determine whether a given year is a leap year or not
var year = 2024;
if (year % 4 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// Task 3: Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
var number = 7;
var result = checkEvenOrOdd(number);
console.log(result);

// Task 4: Check if a given string is empty
var str = "";
if (str === "") {
  console.log("The string is empty");
} else {
  console.log("The string is not empty");
}

// Task 5: Calculate the grade of a student based on their score
var score = 85;
var grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade: " + grade);

// Task 6: Check if a number is divisible by both 3 and 5
var number = 15;
if (number % 3 === 0 && number % 5 === 0) {
  console.log(number + " is divisible by both 3 and 5");
} else {
  console.log(number + " is not divisible by both 3 and 5");
}

// Task 7: Function to determine if a character is a vowel or a consonant
function checkVowelOrConsonant(character) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(character.toLowerCase())) {
    return "Vowel";
  } else {
    return "Consonant";
  }
}
var character = "A";
var result = checkVowelOrConsonant(character);
console.log(result);

// Task 8: Check if a string is a palindrome
function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
var str = "racecar";
var result = isPalindrome(str);
if (result) {
  console.log("The string is a palindrome");
} else {
  console.log("The string is not a palindrome");
}

// Task 9: Find the largest of three numbers
var num1 = 5;
var num2 = 8;
var num3 = 3;
var largest;
if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}
console.log("The largest number is: " + largest);

// Task 10: Check if a given year is a century or not
var year = 1900;
if (year % 100 === 0) {
  console.log(year + " is a century");
} else {
  console.log(year + " is not a century");
}
