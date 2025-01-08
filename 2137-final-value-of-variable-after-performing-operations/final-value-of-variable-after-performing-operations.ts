function finalValueAfterOperations(operations: string[]): number {
    let numValue = 0;
    let n = operations.length;
    for (let x = 0; x < n; x++) {
        numValue += (operations[x][1] === '+') ? 1 : -1;
    }
    return numValue;
};