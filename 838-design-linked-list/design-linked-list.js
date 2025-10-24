
var MyLinkedList = function () {
    this.length = 0;
    this.head = null;
};

var createNode = function (val) {
    this.data = val;
    this.next = null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.length || index < 0) {
        return -1;
    }
    let current = this.head;
    for (let x = 0; x < index; x++) {
        current = current.next;
    }
    return current.data;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new createNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new createNode(val);
    if (this.length == 0) {
        this.addAtHead(val);
        return;
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {

    if (index > this.length) {
        return;
    }

    if (index == 0) {
        this.addAtHead(val);
        return;
    }

    let newNode = new createNode(val);
    let current = this.head;
    for (let x = 0; x < index - 1; x++) {
        current = current.next;
    }
    newNode.next = current?.next;
    current.next = newNode;
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length) {
        return;
    }
    if (index == 0) {
        this.head = this.head?.next;
        this.length--;
        return;
    }
    let current = this.head;
    for (let x = 0; x < index - 1; x++) {
        current = current.next;
    }
    current.next = current?.next?.next;
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */