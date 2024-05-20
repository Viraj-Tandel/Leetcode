/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let splittedPath = splitString(path, "/");
    let pathStack = [];
    let top = -1;

    for (let x = 0; splittedPath[x] || splittedPath[x] == ""; x++) {

        if (splittedPath[x] === "" || splittedPath[x] === ".") {
            continue;
        }

        if (splittedPath[x] === ".." && top >= 0) {
            // TODO POP from stack
            pathStack[top] = undefined;
            top--;
        }
        else if (splittedPath[x] !== '..') {
            top++;
            pathStack[top] = splittedPath[x];
        }
    }

    let resultString = "";

    // * constructing string by traversing a stack
    for (let x = top; x >= 0; x--) {
        resultString = "/" + pathStack[x] + resultString;
    }

    return resultString === "" ? "/" : resultString;
};

// * function to check element is empty or not
function checkEmptyEle(ele) {
    return (ele === "" || ele === ".") ? false : true;
}

// * function to split the string
function splitString(str, seperator) { // str = Viraj_Tandel
    let result = [];
    let current = '';

    for (let x = 0; str[x]; x++) {
        if (str[x] === seperator) {
            result.push(current);
            current = "";
        } else {
            current += str[x];
        }
    }
    result.push(current); // current = Tandel becuase separtor not found in the last interaton

    return result;
}