/**
 * Double the values of the linked list nodes
 * @param {ListNode} head - Head of the linked list
 * @return {ListNode} - Head of the modified linked list
 */
var doubleIt = function (head) {
    if (!head) return head;

    // Reverse the linked list to handle carry easily
    let reversedHead = reverseLL(head);
    let current = reversedHead;
    let carry = 0;
    let prev = null;

    // Traverse the reversed list and double the values
    while (current) {
        let doubleValue = current.val * 2 + carry;
        current.val = doubleValue % 10;
        carry = Math.floor(doubleValue / 10);
        prev = current;
        current = current.next;
    }

    // If there is a carry left, add a new node
    if (carry > 0) {
        prev.next = new ListNode(carry);
    }

    // Reverse the list back to original order
    return reverseLL(reversedHead);
};

// function reverse linked list
function reverseLL(head) {
    if (!head)
        return head;

    let p = head;
    let q = null;
    let r = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }

    return q;
}