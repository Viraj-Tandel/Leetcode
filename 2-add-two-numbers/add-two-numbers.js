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
    let tempList = new ListNode(-1);
    let tempHead = tempList;
    let ans = tempHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = ((l1) ? l1.val : 0) + ((l2) ? l2.val : 0) + carry;
        tempHead.next = new ListNode(sum%10);
        tempHead = tempHead.next;
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    console.log("Temp Node----->", ans)
    //return tempHead.next;
    return ans.next;
};