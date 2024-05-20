/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let splittedPath = path.split("/");
    let pathStack = [];
    let top = -1;


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

    while (pathStack[cnt]) {
        cnt++;
    }

    for (let x = cnt - 1; x >= 0; x--) {
        resultString = "/" + pathStack[x] + resultString;
    }

    if (cnt === 0) {
        resultString = "/"
    }
    return resultString;
};