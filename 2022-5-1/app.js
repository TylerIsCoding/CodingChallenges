// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

const getMiddle = s => {
    // splits the word "s" into an array that we can analyze with .length
    let arr = s.split('');
    // checks to see if the array is longer than 1 character
    if (arr.length > 1) {
        // if the array length is odd
        if (arr.length % 2 != 0) {
            //return the middle character of the array
            return String(arr[arr.length / 2 - 0.5]);
            // if the array length is even
        } else {
            // return the two middle characters of the array
            return arr[arr.length / 2 - 1] + arr[arr.length / 2];
        }
    } else {
        return String(s);
    }
};

console.log(getMiddle('test'));
