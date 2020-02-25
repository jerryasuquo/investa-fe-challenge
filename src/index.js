// Given an array of numbers, complete function sortArray() that will separate the
// odd numbers from the even numbers and return a sorted array with all sorted even
// numbers coming first, then sorted odd numbers following

const sortArray = (array = []) => {
  //your code goes under this line

  let oddArray = []; // array to hold odd numbers
  let evenArray = []; // array to hold even numbers

  // Looping through the entire array to determine each element in the array
  for (let i = 0; i <= array.length - 1; i++) {
    // begin for loop
    let numbers = array[i]; // declaring a 'numbers' variable to hold array index value

    // separates the odd numbers from the even numbers
    if (numbers % 2 === 0) {
      // begin if else
      // if the array index value has a remainder of 0 when divided by 2 then the number will be even
      evenArray.push(numbers); // add the even index value to the even array
    } else {
      // if the array index value has a remainder not equal to 0 when divided by 2 then the number will be odd
      oddArray.push(numbers); // add the odd index value to the odd array
    } // end if else
  } // end for loop

  evenArray.sort(); // sorted even numbers
  oddArray.sort(); // sorted odd numbers

  console.log(evenArray); // display even numbers array
  console.log(oddArray); // display odd numbers array

  // sorted even numbers coming first, then sorted odd numbers following using .concat()
  const sortedArray = evenArray.concat(oddArray);

  // returns the value of your sortArray function
  console.log(sortedArray);

  //your code goes above this line
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
