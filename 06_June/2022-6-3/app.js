// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string
        .match(/([A-Z]?[^A-Z]*)/g)
        .slice(0, -1)
        .join(' ');
}
