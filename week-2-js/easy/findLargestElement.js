/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0) return undefined;
    
    var maxNumber = numbers[0];
    for (const number of numbers) {
        if(number > maxNumber){
            maxNumber = number;
        }
    }
    return maxNumber;
}

module.exports = findLargestElement;