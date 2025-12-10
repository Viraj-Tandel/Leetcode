/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

    if (!head || !head.next) return head;

    let oddPtr = head;
    let evenPtr = head.next;
    let evenPtrHead = evenPtr;

    while (oddPtr.next && evenPtr.next) {
        oddPtr.next = oddPtr.next.next;
        evenPtr.next = evenPtr.next.next;
        oddPtr = oddPtr.next;
        evenPtr = evenPtr.next;
    }
    oddPtr.next = evenPtrHead;

    return head;
};