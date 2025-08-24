/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let targetCode = target.charCodeAt(0);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let temp = letters[mid].charCodeAt(0);

        if (temp > targetCode) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return letters[right].charCodeAt(0) > targetCode
        ? letters[right]
        : letters[0];
};