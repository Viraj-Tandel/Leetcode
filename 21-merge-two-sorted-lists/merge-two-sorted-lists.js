/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // if (!list1 && !list2)
    //     return [];

    if (!list1)
        return list2;

    if (!list2)
        return list1;

    let dummy = new ListNode(-1);
    let ptr = dummy;
    let l1 = list1;
    let l2 = list2;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            let newNode = new ListNode(l1.val);
            ptr.next = newNode;
            ptr = ptr.next;
            l1 = l1.next;
        } else {
            let newNode = new ListNode(l2.val);
            ptr.next = newNode;
            ptr = ptr.next;
            l2 = l2.next;
        }
    }

    if (!l1)
        ptr.next = l2;

    if (!l2)
        ptr.next = l1;

    return dummy.next;
};