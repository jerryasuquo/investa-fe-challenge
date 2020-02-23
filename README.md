# InvestaNigeria Frontend Challenge
## Sorted Array Function
This function will take an array of numbers as a parameter and display the results. Even numbers followed by odd numbers will displayed in the array of sorted numbers.

### Preface
Given an array of numbers, complete function sortArray() that will separate the odd numbers from the even numbers and return a sorted array with all sorted even numbers coming first, then sorted odd numbers following

const sortArray = (array = []) => {
  //your code goes under this line
  let sortedArray = [];
  console.log(sortedArray);

  //your code goes above this line

  return null; //replace the null return value with the return value of your function
};

// Hints: You can extract all odd and even numbers into separate arrays, then
// sort them, then combine both with the even numbers going first

const array1 = [
  23,
  1,
  6,
  34,
  74,
  5,
  28,
  63,
  49,
  5,
  1,
  67,
  23,
  86,
  35,
  577,
  2,
  353,
  121
];

sortArray(array1);
