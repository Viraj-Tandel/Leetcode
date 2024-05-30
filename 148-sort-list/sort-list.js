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
    if (!head || !head.next) return head;
    return mergeSort(head);
};

function mergeSort(head) {

    if (!head || !head.next) {
        return head;
    }

    let mid = findMiddleNode(head);
    let right = mergeSort(mid.next);
    mid.next = null;
    let left = mergeSort(head);

    return mergeLinkedList(left, right);
}

function findMiddleNode(head) {
    let slow = head;
    let fast = head.next;

    // Move fast pointer two steps and slow pointer one step
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function mergeLinkedList(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    let dummy = new ListNode(-1);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1) tail.next = l1;
    if (l2) tail.next = l2;

    return dummy.next;

}