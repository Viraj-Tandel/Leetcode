/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let right = num.length - 1;
    let numsArray = num.split("");

    while (right >= 0) {
        let digit = Number(numsArray[right]);
        if (digit % 2 == 0) {
            right--;
        } else {
            break;
        }
    }

    let r = "";

    for (let x = 0; x <= right; x++) {
        r = r + numsArray[x];
    }

    return r;
}