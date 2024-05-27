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
var mergeNodes = function (head) {
    if (!head)
        return head;

    let mergeList = new ListNode(-1);
    let ptr = mergeList;
    let current = head.next;
    let sum = 0;
    while (current) {
        if (current.val !== 0) {
            sum = sum + current.val;
        } else {
            ptr.next = new ListNode(sum);
            ptr = ptr.next;
            sum = 0;
        }
        current = current.next;
    }
    return mergeList.next;
};
