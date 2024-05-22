/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    if (!head)
        return head;

    let headPtr = head;
    let stack = [];
    let topIndex = -1;

    while (headPtr) {
        stack[++topIndex] = headPtr.val;
        headPtr = headPtr.next;
    }

    let dummy = head;
    while (dummy) {
        if (dummy.val !== stack[topIndex]) {
            return false;
        }
        dummy = dummy.next;
        topIndex--;
    }

    return true;
};