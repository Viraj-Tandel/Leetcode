/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    if (!list1 || !list2)
        return list1;

    let dummy = new ListNode(-11, list1);
    let ptr = dummy.next;
    let prev = dummy;
    let cnt = b - a;

    while (a || cnt) {
        if (a !== 0) {
            prev = ptr;
            a--;
        } else {
            cnt--;
        }
        ptr = ptr.next;
    }

    let next = ptr.next;
    ptr = list2;

    while (ptr.next) {
        ptr = ptr.next;
    }

    // MERGING
    prev.next = list2;
    ptr.next = next;

    return dummy.next;
};