/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fakeNode = new ListNode(0,head);
    let current = fakeNode;

    for(let x = 0; x < n + 1; x++){
        current = current.next;
    }

    let slow = fakeNode;

    while(current){
        current = current.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return fakeNode.next;
};