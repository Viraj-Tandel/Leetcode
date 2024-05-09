/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return head;
    let dummy = new ListNode(-1);
    let greaterList = new ListNode(-1);
    let ptr = dummy;
    let gptr = greaterList;
    let current = head;
    while (current) {
        if (current.val < x) {
            ptr.next = new ListNode(current.val);
            ptr = ptr.next;
        } else {
            gptr.next = new ListNode(current.val);
            gptr = gptr.next;
        }
        current = current.next;
    }
    ptr.next =  greaterList.next;
    return dummy.next;
};