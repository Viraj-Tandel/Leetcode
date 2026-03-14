/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let right = num.length - 1;
    // let numsArray = num.split("");

    while (right >= 0) {
        let digit = Number(num[right]);
        if (digit % 2 == 0) {
            right--;
        } else {
            return num.slice(0,right + 1);
        }
    }

    // let r = "";

    // for (let x = 0; x <= right; x++) {
    //     r = r + num[x];
    // }

    return "";
}