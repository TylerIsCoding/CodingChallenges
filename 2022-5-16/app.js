// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let newString = [];
    let counter = 1;
    for (let i = 0; i < s.length; i++) {
        let newLetter = s[i].repeat(counter);
        newString.push(newLetter);
        counter++;
    }
    for (let x = 0; x < newString.length; x++) {
        newString[x] =
            newString[x].charAt(0).toUpperCase() +
            newString[x].slice(1).toLowerCase();
    }
    console.log(newString);
    return newString.join('-');
}
