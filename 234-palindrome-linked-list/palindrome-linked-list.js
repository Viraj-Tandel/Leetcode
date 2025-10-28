/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    // Finding middle of the linked list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reversing first half
    let current = slow;
    let prev = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }


    // Checking plaindrome or not by comparing two half of the list
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val != secondList.val) {
            return false;
        }
        secondList = secondList.next;
        firstList = firstList.next;
    }

    return true;
};