/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    // for (let x = 0; x < arr.length; x++) {
    //     let doubleNum = 2 * arr[x];
    //     for (let y = 0; y < arr.length; y++) {
    //         if (x !== y) {
    //             if (doubleNum == arr[y]) {
    //                 return true;
    //             }
    //         }
    //     }
    // }
    // return false;

    // let resultMap = new Set();
    // for (let x = 0; x < arr.length; x++) {
    //     if (resultMap.has(arr[x] * 2) || (arr[x] % 2 == 0 && resultMap.has(arr[x] / 2))) {
    //         return true;
    //     }
    //     resultMap.add(arr[x]);
    // }
    // return false;


    // Practice Solve ---> 27/7/25
    let resultMap = new Set();
    for (let x = 0; x < arr.length; x++) {
        if (resultMap.has(arr[x] * 2) || (arr[x] % 2 == 0 && resultMap.has(arr[x] / 2))) {
            return true;
        }
        resultMap.add(arr[x]);
    }
    return false;
};