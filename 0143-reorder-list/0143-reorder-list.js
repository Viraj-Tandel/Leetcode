/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next)
        return head;

    let middleNode = findMiddle(head);
    secondHalf = reverseLinkedList(middleNode.next);
    middleNode.next = null;
    let cnt = 0;
    let first = head;
    let second = secondHalf;
    let third = last = null;

    third = last = first;
    first = first.next;
    while (first !== 0 && second !== null) {
        if (cnt % 2 !== 0) {
            last.next = first;
            last = first;
            first = first.next;
        } else {
            last.next = second;
            last = second;
            second = second.next;
        }
        cnt++;
    }
    if (!second)
        last.next = first;
    else
        last.next = second;
};

function reverseLinkedList(head) {
    let p = head;
    let q = null;
    let r = null;

    while (p !== null) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    return q;
}

function findMiddle(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}