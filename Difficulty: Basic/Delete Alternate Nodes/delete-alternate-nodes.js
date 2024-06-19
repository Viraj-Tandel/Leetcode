//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}

function printList(head){
  let s = "";
  while(head){
    s+=head.data;
    s+=" ";
    head = head.next;
  }
  console.log(s);
}
function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let head = new Node(arr[0]);
    let tail = head;
    for(let j = 1;j<n;j++){
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    let obj = new Solution();
    obj.deleteAlt(head);
    printList(head);
  } 

}
// } Driver Code Ends


/**
 * @param {Node} head
*/

class Solution {
    deleteAlt(head) {
        //code here
        let prev = head;
        let cur = prev.next;
        
        while (cur) {
            prev.next = cur.next;
            prev = prev.next;
            if(prev)
                cur = prev.next;
            else
                cur = null;
        }
        return;
    }
}