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
var deleteMiddle = function(head) {
    if (!head)
        return head;

    let slow = head;
    let fast = head;
    let beforeMid = null;


    while(fast !== null && fast.next){
        beforeMid = slow;
        slow = slow.next;
        if(!fast.next)
           fast = null;
        else {
            fast = fast.next.next;
        }
    }

    if(beforeMid)
        beforeMid.next = slow.next;
    else
        head = null;
    return head;
};