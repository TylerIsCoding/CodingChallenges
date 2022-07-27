// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    let arr = [];
    let sum = 0;
    let count = 1;
    while (count <= n) {
        if (count % 3 === 0 || count % 5 === 0) {
            arr.push(count);
        }
        count++;
    }
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
