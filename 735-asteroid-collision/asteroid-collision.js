/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let resultStack = [];

    for (let x = 0; x < asteroids.length; x++) {
        let current = asteroids[x];
        
        // Push positive asteroids directly to the stack
        if (current > 0) {
            resultStack.push(current);
        } else {
            // While there's a potential collision
            while (resultStack.length > 0 && resultStack[resultStack.length - 1] > 0) {
                let top = resultStack[resultStack.length - 1];
                
                // If top is equal to the absolute value of the current negative asteroid, both explode
                if (top === -current) {
                    resultStack.pop();
                    current = 0; // Current asteroid also explodes
                    break;
                } 
                // If top is greater than the absolute value of the current negative asteroid, the current asteroid explodes
                else if (top > -current) {
                    current = 0; // Current asteroid explodes
                    break;
                } 
                // If top is less than the absolute value of the current negative asteroid, the top asteroid explodes
                else {
                    resultStack.pop();
                }
            }
            
            // If the current asteroid hasn't exploded, push it to the stack
            if (current !== 0) {
                resultStack.push(current);
            }
        }
    }
    
    return resultStack;
};
