// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    const len = x.length;
    for (let i = 0; i < len / 2; i++) {
        if (x[i].toLowerCase() !== x[len - 1 - i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
