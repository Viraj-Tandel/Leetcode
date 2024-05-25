/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let cnt = 0;
    let ptr = head;
    let resultArray = [];

    while (ptr) {
        cnt++;
        ptr = ptr.next;
    }

    let extraNodes = cnt % k;
    let size = Math.floor(cnt / k);

    let current = head;

    while (k) {
        let prev = null;
        let head = current;
        for (let x = 0; x < size; x++) {
            prev = current;
            current = current.next;
        }
        if (extraNodes > 0) {
            prev = current;
            current = current.next;
            extraNodes--;
        }
        if (prev)
            prev.next = null;
        resultArray.push(head);
        k--;
    }
    return resultArray;
};