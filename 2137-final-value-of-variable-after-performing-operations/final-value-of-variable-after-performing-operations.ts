function finalValueAfterOperations(operations: string[]): number {
    let numValue = 0;
    for (let x = 0; operations[x]; x++) {
        numValue += (operations[x][1] === '+') ? 1 : -1;
    }
    return numValue;
};