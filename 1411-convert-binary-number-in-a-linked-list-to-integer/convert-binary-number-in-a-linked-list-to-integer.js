/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    if (!head)
        return head;

    let binaryString = "";

    while (head) {
        binaryString = binaryString + head.val;
        head = head.next;
    }

    return binaryStringToInt(binaryString, 2);
};

function binaryStringToInt(binaryString) {
    let result = 0;

    for (let i = 0; i < binaryString.length; i++) {
        result = result * 2 + (binaryString[i] === '1' ? 1 : 0);
    }

    return result;
}