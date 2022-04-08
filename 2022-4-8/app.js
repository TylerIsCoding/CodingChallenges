// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % 2 === 0) {
            output.push(arr[i]);
        }
    }
    return output;
}
