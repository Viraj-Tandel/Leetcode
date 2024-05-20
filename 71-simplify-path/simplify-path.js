/**
 * Simplifies the given file path by resolving directory movements.
 * @param {string} path - The file path to simplify.
 * @return {string} The simplified file path.
 */
var simplifyPath = function(path) {
    // Split the path into components
    let splittedPath = splitString(path, "/");
    let pathStack = []; // Stack to hold directory components
    let top = -1; // Top index of the stack

    // Iterate over the splitted path
    for (let x = 0; splittedPath[x] || splittedPath[x] == ""; x++) {
        // Skip empty and current directory components
        if (splittedPath[x] === "" || splittedPath[x] === ".") {
            continue;
        }

        // Handle parent directory component
        if (splittedPath[x] === ".." && top >= 0) {
            // Pop from stack to move one directory up
            pathStack[top] = undefined; // Marking as undefined for removal
            top--; // Decrement top index
        } else if (splittedPath[x] !== '..') {
            // Push valid directory components into the stack
            top++; // Increment top index
            pathStack[top] = splittedPath[x];
        }
    }

    let resultString = "";

    // Construct the result string by traversing the stack
    for (let x = top; x >= 0; x--) {
        resultString = "/" + pathStack[x] + resultString;
    }

    // Return "/" for empty path or the constructed result string
    return resultString === "" ? "/" : resultString;
};

/**
 * Splits the given string by the specified separator.
 * @param {string} str - The string to split.
 * @param {string} separator - The separator to split the string.
 * @return {string[]} An array of components after splitting the string.
 */
function splitString(str, separator) {
    let result = [];
    let current = '';
    let resultLength = 0;

    // Iterate over the string characters
    for (let x = 0; str[x]; x++) {
        // Split the string when the separator is encountered
        if (str[x] === separator) {
            result[resultLength] = current;
            current = "";
            resultLength++;
        } else {
            // Build the current component
            current += str[x];
        }
    }

    // Add the last component to the result array
    result[resultLength] = current;

    return result;
}