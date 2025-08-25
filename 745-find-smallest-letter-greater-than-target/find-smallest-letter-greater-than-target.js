/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    // let left = 0;
    // let right = letters.length - 1;
    // let targetCode = target.charCodeAt(0);

    // while (left < right) {
    //     let mid = Math.floor((left + right) / 2);
    //     let temp = letters[mid].charCodeAt(0);

    //     if (temp > targetCode) {
    //         right = mid;
    //     } else {
    //         left = mid + 1;
    //     }
    // }
    // return letters[right].charCodeAt(0) > targetCode
    //     ? letters[right]
    //     : letters[0];

    // **** PRACTISE 25/8/2025
    let left = 0;
    let right = letters.length - 1;
    let targetAsciie = target.charCodeAt(0);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let midAsciieValue = letters[mid].charCodeAt(0);

        if (midAsciieValue > targetAsciie) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return letters[right].charCodeAt(0) > targetAsciie ? letters[right] : letters[0];
};