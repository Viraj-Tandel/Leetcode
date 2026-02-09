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
    let l1 = list1;
    let l2 = list2;
    let mergedList = new ListNode();
    let mergedHead = mergedList;

    while (l1 && l2) {
        let temp;
        if (l1.val < l2.val) {
            temp = l1.next;
            l1.next = null;
            mergedList.next = l1;
            l1 = temp;
        } else {
            temp = l2.next;
            l2.next = null;
            mergedList.next = l2;
            l2 = temp;
        }
        mergedList = mergedList.next;
    }

    if (l1) {
        mergedList.next = l1;
    }
    if (l2) {
        mergedList.next = l2;
    }

    return mergedHead.next;
};