
var MyHashMap = function () {
    this.result = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if (this.get(key) !== -1) {
        for (let x = 0; this.result[x] !== undefined; x++) {
            if (this.result[x][0] === key) {
                this.result[x] = [key, value];
                break;
            }
        }
    } else {
        this.result.push([key, value]);
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    for (let x = 0; this.result[x] !== undefined; x++) {
        if (this.result[x][0] === key) {
            return this.result[x][1];
        }
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    console.log("result before reove------>", this.result);
    for (let x = 0; this.result[x] !== undefined; x++) {
        if (this.result[x][0] === key) {
            this.result.splice(x, 1);
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