/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let splittedPath = path.split("/");
    let pathStack = [];
    let top = -1;
    splittedPath = filterArray(splittedPath, checkEmptyEle); // * removing empty spaces and unwanted char from array


    for (let x = 0; splittedPath[x] || splittedPath[x] == ""; x++) {
        if (splittedPath[x] === ".." && top >= 0) {
            // TODO POP from stack
            pathStack[top] = undefined;
            top--;
        } else if (splittedPath[x] !== "" && splittedPath[x] !== "." && splittedPath[x] !== "..") {
            top++;
            pathStack[top] = splittedPath[x];
        }
    }

    let resultString = "";
    let cnt = 0;

    // * counting array length
    while (pathStack[cnt]) {
        cnt++;
    }

    if (cnt === 0) {
        resultString = "/"
    }

    // * constructing string by traversing a stack
    for (let x = cnt - 1; x >= 0; x--) {
        resultString = "/" + pathStack[x] + resultString;
    }

    return resultString;
};

// * function to filter array
function filterArray(arr, callback) {
    let result = [];
    for (let x = 0; arr[x] || arr[x] == ""; x++) {
        if (callback(arr[x]))
            result.push(arr[x]);
    }
    return result;
}

// * function to check element is empty or not
function checkEmptyEle(ele) {
    return (ele === "" || ele === ".") ? false : true;
}