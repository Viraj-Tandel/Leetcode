/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    if(!s.length)
        return 0;

    let resultStack = [];
    let maxPar = 0;
    let cnt = 0;
    let deptCnt = 0;
    while(s[cnt]){
        if(s[cnt] === '('){
            resultStack.push('(');
        } else if(s[cnt] == ')'){
            maxPar = Math.max(maxPar,resultStack.length);
            resultStack.pop();
        }
        cnt++;
    }
    return maxPar;
};