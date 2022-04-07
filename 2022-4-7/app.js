// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let output = s.split(' ');
    let smallest = output[0];
    for (let i = 0; i < output.length; i++) {
        if (output[i].length < smallest.length) {
            smallest = output[i];
        }
    }
    return smallest.length;
}
