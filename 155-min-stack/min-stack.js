
var MinStack = function () {
    this.minStack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.min = Math.min(this.min, val);
    if (this.minStack.length == 0) {
        this.minStack.push([val, val])
    } else {
        let min = Math.min(this.minStack[this.minStack.length - 1][1], val);
        this.minStack.push([val, min])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.minStack[this.minStack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */