var sortList = function (head) {
    // If the list is empty or has only one node, it's already sorted
    if (!head || !head.next) return head;
    return mergeSort(head);
};

/**
 * Recursively splits and merges the linked list.
 * @param {ListNode} head - The head of the linked list to sort.
 * @return {ListNode} - The head of the sorted linked list.
 */
function mergeSort(head) {
    // Base case: if the list is empty or has only one node, it's already sorted
    if (!head || !head.next) {
        return head;
    }

    // Find the middle of the list
    let mid = findMiddleNode(head);
    // Recursively sort the right half of the list
    let right = mergeSort(mid.next);
    // Split the list into two halves
    mid.next = null;
    // Recursively sort the left half of the list
    let left = mergeSort(head);

    // Merge the two sorted halves
    return mergeLinkedList(left, right);
}

/**
 * Finds the middle node of the linked list using the fast and slow pointer technique.
 * @param {ListNode} head - The head of the linked list.
 * @return {ListNode} - The middle node of the linked list.
 */
function findMiddleNode(head) {
    let slow = head;
    let fast = head.next;

    // Move fast pointer two steps and slow pointer one step until fast reaches the end of the list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * Merges two sorted linked lists into one sorted linked list.
 * @param {ListNode} l1 - The head of the first sorted linked list.
 * @param {ListNode} l2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
function mergeLinkedList(l1, l2) {
    // If both lists are empty, return null
    if (!l1 && !l2) return null;
    // If one of the lists is empty, return the other list
    if (!l1) return l2;
    if (!l2) return l1;

    // Create a dummy node to simplify the merge process
    let dummy = new ListNode(-1);
    let tail = dummy;

    // Merge the two lists by comparing the values of the nodes
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    // Append the remaining nodes of l1 or l2, if any
    if (l1) tail.next = l1;
    if (l2) tail.next = l2;

    // Return the merged sorted list
    return dummy.next;
}
