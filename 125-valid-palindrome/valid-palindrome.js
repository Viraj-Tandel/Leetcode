/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let sArr = [];
    let rArr = [];

    // Separating chars from string and eleminating the special char and spaces
    for (let x = 0; x < s.length; x++) {
        if (s[x] !== " ") {
            let asciieVal = s[x].charCodeAt(0);
            if ((asciieVal >= 65 && asciieVal <= 90) || (asciieVal >= 97 && asciieVal <= 122) || (asciieVal >= 48 && asciieVal <= 57)) {
                sArr.push(s[x].toLowerCase());
            }
        }
    }

    rArr = JSON.parse(JSON.stringify(sArr));
    // reversing a string
    let n = Math.floor(rArr.length / 2);
    for (let y = 0; y < n; y++) {
        let temp = rArr[y];
        rArr[y] = rArr[rArr.length - y - 1];
        rArr[rArr.length - y - 1] = temp;
    }

    console.log("sArr----->", sArr.join(""))
    console.log("rArr----->", rArr.join(""))



    return sArr.join("") == rArr.join("");
};