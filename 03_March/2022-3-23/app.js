// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = 0;
    if (array.length < 1) {
        return 0;
    } else {
        for (let item of array) {
            sum += item;
        }
    }
    return sum / array.length;
}
