var insertGreatestCommonDivisors = function (head) {
    if (!head || !head.next) {
        return head; // Return if the list is empty or has only one node.
    }

    let previousNode = head;
    let currentNode = head.next;

    while (currentNode) {
        // Calculate GCD of the values of the current pair of nodes
        let gcdValue = gcd(previousNode.val, currentNode.val);

        // Create a new node with the GCD value
        let newNode = new ListNode(gcdValue);

        // Insert the new node between previousNode and currentNode
        previousNode.next = newNode;
        newNode.next = currentNode;

        // Move to the next pair of nodes
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    return head;
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}