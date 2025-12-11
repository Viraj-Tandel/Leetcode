/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let sumList = new ListNode();
    let head = sumList;
    let carry = 0;

    while (p1 || p2) {
        let add = ((p1) ? p1.val : 0) + ((p2) ? p2.val : 0);
        console.log("add" + add % 10);
        if (carry) {
            add = add + carry;
            carry = 0;
        }
        head.next = new ListNode(add % 10);
        carry = Math.floor(add / 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        head = head.next;
    }
    if (carry) {
        head.next = new ListNode(carry);
    }
    return sumList.next;
};