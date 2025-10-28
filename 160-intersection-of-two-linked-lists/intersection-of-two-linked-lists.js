/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // let seenNodes = new Set();

    // let current = headA;
    // while (current) {
    //     if (!seenNodes.has(current)) {
    //         seenNodes.add(current);
    //     }
    //     current = current.next;
    // }

    // current = headB;
    // while (current) {
    //     if (seenNodes.has(current)) {
    //         return current;
    //     }
    //     current = current.next;
    // }

    // return null;

    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = (pA === null) ? headB : pA.next;
        pB = (pB === null) ? headA : pB.next;
    }

    return pB;
};