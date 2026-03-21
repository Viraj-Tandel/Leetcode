/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // let map = {};

    // for (let x = 0; x < strs.length; x++) {
    //     map[strs[x]] = true;
    // }

    // console.log(map)

    // let result = [];

    // for (let x = 0; x < strs.length; x++) {
    //     if (map[strs[x]]) {
    //         let temp = [strs[x]];
    //         for (let y = x + 1; y < strs.length; y++) {
    //             if (map[strs[y]] && [...strs[x]].sort().join("") === [...strs[y]].sort().join("")) {
    //                 temp.push(strs[y]);
    //                 map[strs[y]] = false;
    //             }
    //         }
    //         result.push(temp);
    //     }
    // }

    // return result;

    // let map = {};

    // for (let x = 0; x < strs.length; x++) {
    //     let temp = [...strs[x]].sort().join("");

    //     if (!map[temp]) {
    //         map[temp] = [strs[x]];
    //     } else {
    //         map[temp].push(strs[x]);
    //     }
    // }

    // return Object.values(map);

    let map = {};

    for (let x = 0; x < strs.length; x++) {
        // create key
        let freqMap = new Array(26).fill(0);

        for (let y = 0; y < strs[x].length; y++) {
            let charIndex = strs[x][y].charCodeAt() - 'a'.charCodeAt();
            ++freqMap[charIndex];
        }

        let key = "";
        for (let z = 0; z < freqMap.length; z++) {
            key = key + String.fromCharCode((97 + z)) + freqMap[z];
        }

        if (map[key] == undefined) {
            map[key] = [strs[x]];
        } else {
            map[key].push(strs[x]);
        }
    }

    return Object.values(map);
};