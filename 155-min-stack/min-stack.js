
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.stack.length) {
        this.stack.push(val);
        this.minStack.push(val);
    } else {
        this.stack.push(val);
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    }
}
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.minStack.length)
        return this.minStack[this.minStack.length - 1];
    else
        return this.minStack;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */