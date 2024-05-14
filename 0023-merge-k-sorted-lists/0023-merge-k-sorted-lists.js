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
    // let k = lists.length;
    // let mergedLists = [];
    // while (k > 1) {
    let result = mergeTwoList(lists[0], lists[1]);
    for (let x = 2; x < lists.length; x++) {
        result = mergeTwoList(result, lists[x]);
    }
    //     lists = mergedLists;
    //     k = mergedLists.length;
    // }

    // console.log("mergedLists-------->",result);
    return result;
};

// function to merge the two sorted linked list
function mergeTwoList(list1, list2) {
    let third = null;
    let last = null;
    let first = list1;
    let second = list2;

    if (!first && !second)
        return null;

    if (!first)
        return second;

    if (!second)
        return first;


    if (first.val < second.val) {
        third = last = first;
        first = first.next;
        last.next = null;
    } else {
        third = last = second;
        second = second.next;
        last.next = null;
    }

    while (first && second) {
        if (first.val < second.val) {
            last.next = first;
            last = first;
            first = first.next;
            last.next = null;
        } else {
            last.next = second;
            last = second;
            second = second.next;
            last.next = null;
        }
    }

    if (!first)
        last.next = second;

    if (!second)
        last.next = first;

    // console.log("Merge Linked List-------->", third);
    return third;

    // if (!l1) return l2;
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