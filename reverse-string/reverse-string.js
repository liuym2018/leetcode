/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    console.log(s);
    let char;
    let half = Math.floor(s.length/2);
    for (let i = 0; i < half; i++) {
        char = s[i];
        s[i] = s[s.length -1 - i]; 
        s[s.length -1 - i] = char;
    }
};