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
var removeZeroSumSublists = function (head) {
    if (!head)
        return head;

    let dummy = new ListNode(0, head);
    let map = new Map();
    map.set(0, dummy);
    let sum = 0;

    while (head !== null) {
        sum += head.val;
        if (map.has(sum)) {
            // TODO DELETE LL NODES
            let start = map.get(sum);
            let temp = start;
            let prefixSum = sum;
            while (temp !== head) {
                temp = temp.next;
                prefixSum = prefixSum + temp.val;
                if (temp !== head)
                    map.delete(prefixSum);
            }
            start.next = head.next;
        } else {
            // map[sum] = head;
            map.set(sum, head);
        }
        head = head.next;
    }

    return dummy.next;
};