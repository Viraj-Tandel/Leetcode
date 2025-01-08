function finalValueAfterOperations(operations: string[]): number {
    let numValue = 0;
    for (let x = 0; operations[x]; x++) {
        switch (operations[x]) {
            case 'X++':
                numValue += 1;
                break;

            case '++X':
                numValue += 1;
                break;

            case '--X':
                numValue -= 1;
                break;

            case 'X--':
                numValue -= 1;
        }
    }
    return numValue;
};