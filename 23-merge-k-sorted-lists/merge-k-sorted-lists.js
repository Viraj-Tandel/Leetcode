/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0)
        return null;

    if (lists.length === 1)
        return lists[0];

    let size = lists.length;

    if (size === 2)
        return mergeLL(lists[0], lists[1]);

    let dummySort = mergeLL(lists[0], lists[1]);

    if (size > 2) {
        let cnt = 2;
        while (size !== cnt) {
            dummySort = mergeLL(lists[cnt], dummySort);
            cnt++;
        }
    } else {
        return dummySort;
    }

    return dummySort;
};

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

    ptr.next = l1 ? l1 : l2;

    return dummy.next;
}