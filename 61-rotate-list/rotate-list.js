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
var rotateRight = function (head, k) {

    if (!head || !head.next) {
        return head;
    }

    let current = head;
    let slow = head;
    let fast = head;
    let length = 0;

    // calculating length of linked list
    while (current) {
        current = current.next;
        length++;
    }

    k = k % length;

    if (k == 0) {
        return head;
    }

    // keeping the gap of k where we want to break the linked list in two part end & start of linked list
    for (let x = 0; x < k; x++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // storing the next before making it to point out to null
    let newHead = slow.next;

    // keeping the last next to be null
    slow.next = null;

    // end of linked list pointing to head
    fast.next = head;

    return newHead;
};