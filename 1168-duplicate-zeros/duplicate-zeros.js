/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    // for (let x = 0; x < arr.length; x++) {
    //     if (arr[x] == 0) {
    //         arr.splice(x, 0, 0);
    //         arr.splice(arr.length - 1, 1);
    //         x++;
    //     }
    // }

    const temp = [];
    for (let x = 0; x < arr.length; x++) {
        temp.push(arr[x]);
        if (arr[x] == 0) {
            temp.push(0);
        }
    }

    for (let x = 0; x < arr.length; x++) {
        arr[x] = temp[x]
    }
};