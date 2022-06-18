// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
    let returnArray = [];
    let count = 0;
    while (count < n + 1) {
        returnArray.push(Math.pow(2, count));
        count++;
    }
    return returnArray;
}
