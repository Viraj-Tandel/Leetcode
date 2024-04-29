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
    let cnt = 0;
    let start = head;
    
    while(start){
        cnt++;
        start = start.next;
    }

    if(cnt === 1)
        return null;

    if(n > cnt){
        return head;
    }

    let p = head;
    let q = null;
    cnt = cnt - n;

        if(cnt===0)
        return head.next;


    while(cnt){
        q = p;
        p = p.next;
        cnt--;
    }

    if(q)
        q.next = p.next;
    

    return head;
};