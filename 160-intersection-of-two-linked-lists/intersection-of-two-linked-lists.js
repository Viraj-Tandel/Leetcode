/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    if (!headA || !headB) {
        return null;
    }

    let linkedList1Length = calculateLength(headA);
    let linkedList2Length = calculateLength(headB);
    let diff = Math.abs(linkedList1Length - linkedList2Length);
    let ptr1 = headA;
    let ptr2 = headB;

    if (linkedList1Length > linkedList2Length) {
        for (let x = 0; x < diff; x++) {
            ptr1 = ptr1.next;
        }
    } else if (linkedList1Length < linkedList2Length) {
        for (let x = 0; x < diff; x++) {
            ptr2 = ptr2.next;
        }
    }

    while (ptr1 && ptr2) {
        if (ptr1 === ptr2) {
            return ptr1;
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return null;
};

function calculateLength(head) {
    let cnt = 0;
    while (head) {
        cnt++;
        head = head.next;
    }
    return cnt;
}