/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    if (!head) return null;

    // Step 1: Find the length of the linked list
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // Step 2: Identify the k-th node from the beginning
    let first = head;
    for (let i = 1; i < k; i++) {
        first = first.next;
    }

    // Step 3: Identify the k-th node from the end
    let second = head;
    for (let i = 1; i < length - k + 1; i++) {
        second = second.next;
    }

    // Step 4: Swap the values of the two nodes
    let temp = first.val;
    first.val = second.val;
    second.val = temp;

    // Step 5: Return the head of the linked list
    return head;
};