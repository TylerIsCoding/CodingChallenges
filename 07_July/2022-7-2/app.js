// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = word => {
    let arr = word.split('');
    let returnArr = [];
    for (let letter of arr) {
        if (letter === letter.toUpperCase()) {
            returnArr.push(arr.indexOf(letter));
        }
    }
    return returnArr;
};
