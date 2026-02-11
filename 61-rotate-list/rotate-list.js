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
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head || !head.next)
        return head;
    let length = 0;
    let current = head;
    let fast = head;
    let slow = head;

    while (current) {
        current = current.next
        length++;
    }

    k = k % length;

    if(k==0)
        return head;

    for (let x = 0; x < k; x++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    slow.next = null;
    fast.next = head;

    return newHead;
};