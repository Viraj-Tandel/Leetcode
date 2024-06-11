/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    if (!head || !head.next || !head.next.next) return [-1, -1];

    let prev = head;
    let current = head.next;
    let index = 1;
    let firstCriticalIndex = -1;
    let lastCriticalIndex = -1;
    let minDistance = Infinity;

    while (current.next) {
        if ((current.val > prev.val && current.val > current.next.val) ||
            (current.val < prev.val && current.val < current.next.val)) {

            if (firstCriticalIndex === -1) {
                firstCriticalIndex = index;
            } else {
                minDistance = Math.min(minDistance, index - lastCriticalIndex);
            }

            lastCriticalIndex = index;
        }
        prev = current;
        current = current.next;
        index++;
    }

    if (minDistance === Infinity) {
        return [-1, -1];
    }

    return [minDistance, lastCriticalIndex - firstCriticalIndex];
}