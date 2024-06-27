var MyHashMap = function () {
    this.result = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    for (let x = 0; x < this.result.length; x++) {
        if (this.result[x][0] === key) {
            this.result[x][1] = value;  // Update the existing key's value
            return;
        }
    }
    this.result.push([key, value]);  // Insert the new key-value pair
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    for (let x = 0; x < this.result.length; x++) {
        if (this.result[x][0] === key) {
            return this.result[x][1];
        }
    }
    return -1;  // Key not found
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    for (let x = 0; x < this.result.length; x++) {
        if (this.result[x][0] === key) {
            this.result.splice(x, 1);  // Remove the key-value pair
            return;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
