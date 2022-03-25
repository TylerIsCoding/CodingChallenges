// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
    let largestDivisor = Math.ceil(Math.sqrt(n) * Math.sqrt(n));
    let divArray = [];
    if (n === 1) {
        return 1;
    }
    while (largestDivisor > 0) {
        if (n % largestDivisor === 0) {
            divArray.push(largestDivisor);
            largestDivisor--;
        } else {
            largestDivisor--;
        }
    }
    return divArray.length;
}
