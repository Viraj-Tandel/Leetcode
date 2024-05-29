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
var removeNodes = function (head) {
    if (!head)
        return head;

    let reverse = reverseLL(head);
    let stack = [];
    let dummy = new ListNode(-1)
    let ptr = dummy;

    while (reverse) {
        if (stack.length === 0) {
            stack.push(reverse.val);
        } else if (stack[stack.length - 1] <= reverse.val) {
            stack.push(reverse.val);
        }
        reverse = reverse.next;
    }

    while (stack.length) {
        let newNode = new ListNode(stack.pop());
        ptr.next = newNode;
        ptr = ptr.next;
    }

    return dummy.next;
};

function reverseLL(head) {
    let p = head;
    let q = r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    return q;
}