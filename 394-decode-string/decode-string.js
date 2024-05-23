/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s.length === 1) return s;

  let stack = [];
  for (let x = 0; x < s.length; x++) {
    if (s[x] !== "]") {
      stack.push(s[x]);
    } else {
      // TODO Decode string
      let temp = "";
      for (let y = stack.length - 1; stack[y] !== "["; y--) {
        temp = stack.pop() + temp;
      }
      stack.pop(); // pop out square bracket '['
      let cnt = "";
      for (let y = stack.length - 1; y >= 0; y--) {
        if (!isNaN(stack[y])) cnt = stack.pop() + cnt;
        else break;
      }
      cnt = Number(cnt);
      let res = repeatString(temp, cnt);
      stack.push(res);
    }
  }
  return customJoin(stack, "");
};

// polyfill for Array.prototype.repeat()
function repeatString(str, count) {
  let result = "";
  while (count) {
    result += str;
    count--;
  }
  return result;
}

// * polyfill for Array.join()
function customJoin(arr, separator = ",") {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      result += separator;
    }
    if (arr[i] !== undefined && arr[i] !== null) {
      result += arr[i];
    }
  }
  return result;
}
