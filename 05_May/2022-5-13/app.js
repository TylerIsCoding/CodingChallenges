// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    let sum = 0;
    if (array instanceof Array && array.length > 2) {
        const sortedArr = array.sort((a, b) => {
            return a - b;
        });
        for (const nums of sortedArr) {
            sum += nums;
        }
        sum -= sortedArr[0] + sortedArr[array.length - 1];
        return sum;
    } else {
        return 0;
    }
}
