/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
*/

// Write your code here:
const reverseArray = array => {
    const newArray = [];
  
    for(let item of array) {
      newArray.unshift(item);
    }
  
    return newArray;
  };
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];