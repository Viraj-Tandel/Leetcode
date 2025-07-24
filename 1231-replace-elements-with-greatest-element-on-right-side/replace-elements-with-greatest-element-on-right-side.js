/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {

    // if (arr.length <= 1) return [-1];

    // let result = [];

    // for (let x = 0; x < arr.length - 1; x++) {
    //     let max = -Infinity;
    //     for (let y = x + 1; y < arr.length; y++) {
    //         if (max < arr[y]) {
    //             max = arr[y];
    //         }
    //     }
    //     result.push(max);
    // }
    // result.push(-1);

    // return result;

    if (arr.length <= 1) return [-1];

    let max = -1;
    for (let x = arr.length - 1; x >= 0; x--) {
        let current = arr[x];
        arr[x] = max;
        if (max < current) {
            max = current;
        }
    }

    return arr;
};