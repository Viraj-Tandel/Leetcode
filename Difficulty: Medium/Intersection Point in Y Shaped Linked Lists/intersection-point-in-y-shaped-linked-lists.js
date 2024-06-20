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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
        let p = input_ar0[2];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for(let i=1;i<n;i++){
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for(let i=1;i<m;i++){
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let common_list="";
        if(p>0) common_list=readLine();
        let input_ar3 = []
        let head3 = null;
        if(p>0) input_ar3=common_list.split(' ').map(x=>parseInt(x));
        if(p>0) head3 = new Node(input_ar3[0]);
        let tail3 = head3;
        for(let i=1;i<p;i++){
            tail3.next = new Node(input_ar3[i]);
            tail3 = tail3.next;
        }
        
        let temp = head1;
        while(temp !== null && temp.next !== null)
            temp = temp.next;
        if(temp !== null) temp.next = head3;
        
        temp = head2;
        while(temp !== null && temp.next !== null)
            temp = temp.next;
        if(temp !== null) temp.next = head3;
        
        let obj = new Solution();
        console.log(obj.intersectPoint(head1, head2));
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {number}
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
    //Function to find intersection point in Y shaped Linked Lists.
    intersectPoint(head1, head2)
    {
        if(!head1 || !head2)
            return -1;
        
        
        let ptr1 = head1;
        let ptr2 = head2;
        
        while(ptr1 !== ptr2){
            ptr1 = (ptr1)?ptr1.next: head2;
            ptr2 = (ptr2)?ptr2.next: head1;
        }
        
        return ptr1?ptr1.data:-1;
    }
}