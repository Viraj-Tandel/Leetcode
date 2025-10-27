/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // let seenNodes = new Set();
    // let current = head;

    // while(current){
    //     if(seenNodes.has(current)){
    //         return true;
    //     }
    //     seenNodes.add(current);
    //     current = current.next;
    // }
    // return false;
    if (!head)
        return false;

    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};