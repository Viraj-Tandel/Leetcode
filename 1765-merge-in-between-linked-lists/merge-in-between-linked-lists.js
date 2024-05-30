/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Merges list2 into list1 between nodes at indices a and b.
 * @param {ListNode} list1 - The first linked list.
 * @param {number} a - The start index for the merge.
 * @param {number} b - The end index for the merge.
 * @param {ListNode} list2 - The second linked list to merge into list1.
 * @return {ListNode} - The merged linked list.
 */
var mergeInBetween = function (list1, a, b, list2) {
    if (!list1 || !list2) return list1;

    let dummy = new ListNode(-1, list1);
    let current = dummy.next;
    let prev = dummy;
    let cnt = b - a;

    // Traverse to the node before 'a' and the node at 'b'
    while (a || cnt) {
        if (a !== 0) {
            prev = current;
            a--;
        } else {
            cnt--;
        }
        current = current.next;
    }

    // Save the node after 'b'
    let next = current.next;
    current = list2;

    // Traverse to the end of list2
    while (current.next) {
        current = current.next;
    }

    // Merge list2 in between list1
    prev.next = list2;
    current.next = next;

    return dummy.next;
};
