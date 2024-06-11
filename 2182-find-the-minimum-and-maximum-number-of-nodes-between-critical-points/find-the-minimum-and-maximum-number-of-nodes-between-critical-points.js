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
    if (!head || !head.next || !head.next.next)
        return [-1, -1];

    let prev = head;
    let ptr = head.next;
    let min = -1;
    let max = -1;
    let criticalCnt = 0;
    let firstPoint = -1;
    let prevMaxPoint = -1;
    let minDistance = Infinity;

    while (ptr.next) {
        if ((ptr.val > prev.val && ptr.val > ptr.next.val) || (ptr.val < prev.val && ptr.val < ptr.next.val)) {
            if (firstPoint === -1) {
                firstPoint = criticalCnt;
            }

            if (prevMaxPoint !== -1) {
                minDistance = Math.min(minDistance, criticalCnt - prevMaxPoint)
            }

            prevMaxPoint = criticalCnt;

        }
        prev = ptr;
        ptr = ptr.next;
        criticalCnt++;
    }

    if (minDistance === Infinity) {
        return [-1, -1];
    }

    return [minDistance, prevMaxPoint - firstPoint];

}