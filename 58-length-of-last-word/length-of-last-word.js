/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // let length = 0;
    // let isWordFound = false;

    // // * starting from back of the string
    // for (let x = s.length - 1; x >= 0; x--) {
    //     // * checking the char is empty or not empty not then we found a word and we should start counting untill the next empty space come
    //     if (s[x] !== " ") {
    //         length++;
    //         isWordFound = true;
    //     }
    //     // if word is already found and we encounter a space then simply we should break out of the loop & if word has trailing space and word is not found then loop continues untill the word found
    //     else if (s[x] == " " && isWordFound) {
    //         break;
    //     }
    // }

    // return length;

    let count = 0;

    for (let x = s.length - 1; x >= 0 ; x--) {
        if (s[x] !== " ") {
            count++;
        } else if (count > 0) {
            break;
        }
    }

    return count;
};