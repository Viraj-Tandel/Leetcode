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
var sortList = function (head) {
    if (!head || !head.next)
        return head;

    let beforeMid = head;
    let middleNode = getMiddleNode(head);
    let rightPart = middleNode.next;
    middleNode.next = null;

    let left = sortList(beforeMid);
    let right = sortList(rightPart);

    return mergeLL(left, right);
};

function getMiddleNode(head) {
    if (!head)
        return head;

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function mergeLL(l1, l2) {
    if (!l1)
        return l2;

    if (!l2)
        return l1;

    let dummy = new ListNode(-1);
    let ptr = dummy;


    while (l1 && l2) {
        if (l1.val < l2.val) {
            ptr.next = l1;
            l1 = l1.next;
        } else {
            ptr.next = l2;
            l2 = l2.next;
        }
        ptr = ptr.next;
    }

    ptr.next = l2 ? l2 : l1;

    return dummy.next;
}