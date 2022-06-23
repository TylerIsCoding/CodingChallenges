// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input === null || input === []) {
        return [];
    }
    let count = 0;
    let sum = 0;
    for (let number of input) {
        if (number > 0) {
            count++;
        } else {
            sum += number;
        }
    }
    if (count === 0 && sum === 0) {
        return [];
    }
    return [count, sum];
}
