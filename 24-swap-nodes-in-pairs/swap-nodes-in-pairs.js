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
var swapPairs = function(head) {
    if(!head || !head.next){
        return  head;
    }

    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let cur = head;

    while(cur && cur.next){
        prev.next = cur.next;
        let temp = cur.next.next;
        cur.next.next = cur;
        cur.next = temp;
        prev = cur;
        cur = temp;
    }

    console.log("ANSWER---->", dummy.next);

    return dummy.next;
};