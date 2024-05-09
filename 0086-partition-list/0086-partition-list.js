var partition = function (head, x) {
    if (!head || !head.next) return head; // Handle edge cases

    let lessThanX = new ListNode(); // Pointer for nodes less than x
    let greaterThanOrEqualToX = new ListNode(); // Pointer for nodes greater than or equal to x
    let lessPtr = lessThanX;
    let greaterPtr = greaterThanOrEqualToX;

    // Traverse the original list
    while (head) {
        if (head.val < x) {
            lessPtr.next = head; // Append node to the less than x list
            lessPtr = lessPtr.next;
        } else {
            greaterPtr.next = head; // Append node to the greater than or equal to x list
            greaterPtr = greaterPtr.next;
        }
        head = head.next;
    }

    greaterPtr.next = null; // Terminate the greater than or equal to x list

    lessPtr.next = greaterThanOrEqualToX.next; // Connect the less than x list to the greater than or equal to x list

    return lessThanX.next; // Return the head of the partitioned list
};
