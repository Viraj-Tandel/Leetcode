/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let reverseList = reverseLinkedList(head);
    let sentinel = new ListNode();
    sentinel.next = reverseList;

    let current = sentinel;
    for (let x = 1; x < n; x++) {
        current = current.next;
    }
    current.next = current.next.next;

    sentinel = reverseLinkedList(sentinel.next);

    return sentinel;
};

var reverseLinkedList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}