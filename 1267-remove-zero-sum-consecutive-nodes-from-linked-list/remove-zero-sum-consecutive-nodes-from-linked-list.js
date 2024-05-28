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
    let dummy = new ListNode(0, head);
    let prefixSumMap = new Map();
    let sum = 0;

    // First pass to build the prefix sum map
    for (let node = dummy; node !== null; node = node.next) {
        sum += node.val;
        prefixSumMap.set(sum, node);
    }

    // Second pass to remove zero-sum sublists
    sum = 0;
    for (let node = dummy; node !== null; node = node.next) {
        sum += node.val;
        node.next = prefixSumMap.get(sum).next;
    }

    return dummy.next;
};
