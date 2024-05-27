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
    let start = head;
    let end = head.next;
    let sum = 0;
    while (end) {
        if (end.val !== 0) {
            sum = sum + end.val;
        } else {
            ptr.next = new ListNode(sum);
            ptr = ptr.next;
            sum = 0;
        }
        end = end.next;
    }
    return mergeList.next;
};
