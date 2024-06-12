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
var insertGreatestCommonDivisors = function (head) {
    if (!head || !head.next)
        return head;

    let prev = head;
    let cur = head.next;

    while (cur) {
        let newNode = new ListNode(gcd(prev.val, cur.val));
        prev.next = newNode;
        newNode.next = cur;
        prev = cur;
        cur = cur.next;
    }
    return head;
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}