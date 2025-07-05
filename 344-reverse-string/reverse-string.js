/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let size = s.length;
    let temp;
    for(let i = 0; i < Math.floor(size/2); i++){
        temp = s[i];
        s[i] = s[size-1-i];
        s[size-1-i] = temp;
    }
};