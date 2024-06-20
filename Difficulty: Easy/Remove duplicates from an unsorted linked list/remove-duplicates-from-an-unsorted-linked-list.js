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
        let obj = new Solution();
        let res = obj.removeDuplicates(head);
        printlist(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
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
        removeDuplicates(head) {
                // If the list is empty, return the head (null)
                if (!head) return head;

                // Initialize current pointer to the head, prev pointer to null, and a hashMap to track seen values
                let current = head;
                let prev = null;
                let hashMap = new Map();

                // Traverse the linked list
                while (current) {
                        // Check if current node's data is already in the hashMap
                        if (hashMap.get(current.data)) {
                                // If it is a duplicate, update the link to skip the current node and move the current pointer
                                prev.next = current.next;
                                current = current.next;
                        } else {
                                // If it is not a duplicate, add current node's data to the hashMap
                                hashMap.set(current.data, true);
                                // Move prev pointer to the current node
                                prev = current;
                                // Move current pointer to the next node
                                current = current.next;
                        }
                }
                // Return the head of the modified list
                return head;
        }
}