
//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
let calculateSum = (a, b) => {
  return a + b;
};
let result = calculateSum(1, 99);
console.log(result); // Output: 30


//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
let isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(44)); // Output: true
console.log(isEven(77)); // Output: false


//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
let findMax = (numbers) => {
  return Math.max(...numbers);
};
let array = [22, 10, 37, 25, 35, 39, 30];
let maxNumber = findMax(array);
console.log(maxNumber); // Output: 39


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
let reverseString = (str) => {
  return str.split('').reverse().join('');
};
let originalString = "Hello Dr. Ali";
let reversedString = reverseString(originalString);
console.log(reversedString); // Output: "ilA .rD olleH"


//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
let filterOddNumbers = (numbers) => {
  return numbers.filter(num => num % 2 !== 0);
};
let array1 = [22, 10, 37, 25, 35, 39, 30];
let oddNumbers = filterOddNumbers(array1);
console.log(oddNumbers); // Output: [37, 25, 35, 39]


//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
let sumArray = (numbers6) => {
  return numbers6.reduce((s, c) => s + c, 0);
};
let array6 = [22, 10, 370, 25, 35, 39, 30];
let sumNumbers = sumArray(array6);
console.log(sumNumbers); // Output: 531



//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
let sortArray = (numbers7) => {
  return numbers7.sort((a, b) => a - b);   // comparison function used 
};
let array7 = [22, 10, 37, 25, 35, 39, 30];
let ascNumbers = sortArray(array7);
console.log(ascNumbers);  // Output:  [10, 22, 25, 30, 35, 37, 39]



/*8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns 
the same string with the first letter capitalized. 
Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"  */

let capitalizeFirstLetter = (str) => {
  if (!str) return str;  // Check if the string is empty or null

  // Capitalize the first letter and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeFirstLetter("jessica"));  // Output: "Jessica"
console.log(capitalizeFirstLetter("earth is dying by humans."));  // Output: "Earth is dying by humans."
console.log(capitalizeFirstLetter(""));       // Output: ""
console.log(capitalizeFirstLetter(null));     // Output: null



