//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        head = obj.rotate(head, k);
        printlist(head);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
 * @param {number} k
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
        // Function to rotate a linked list.
        rotate(head, k) {
                // If the list is empty, has only one node, or no rotations needed
                if (!head || !head.next || k === 0) return head;

                // Initialize tail to head and calculate the length of the list
                let tail = head;
                let length = 1; // Start counting from 1 since we are already at head

                // Traverse the list to find the length and the last node
                while (tail.next) {
                        tail = tail.next;
                        length++;
                }

                // Calculate the effective number of rotations needed
                let noOfEffectiveRotation = k % length;

                // If no effective rotation is needed, return the head
                if (noOfEffectiveRotation === 0) return head;

                // Initialize newHead to head and find the new head after rotations
                let newHead = head;
                let newTail = null;

                // Move newHead to the right position
                // let stepsToNewHead = length - noOfEffectiveRotation;
                while (noOfEffectiveRotation > 0) {
                        newTail = newHead;
                        newHead = newHead.next;
                        noOfEffectiveRotation--;
                }

                // Break the list at newTail and reconnect the tail to the original head
                newTail.next = null; // New end of the list
                tail.next = head; // Original tail points to the original head

                return newHead; // Return new head of the list
        }
}