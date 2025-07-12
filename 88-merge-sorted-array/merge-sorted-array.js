/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // let nums1Copy = nums1.slice(0, m);
    // let p1 = 0;
    // let p2 = 0;
    // for (let x = 0; x < nums1.length; x++) {
    //     if (p2 >= n || ((nums1Copy[p1] < nums2[p2]) && p1 < m)) {
    //         nums1[x] = nums1Copy[p1];
    //         p1++;
    //     } else {
    //         nums1[x] = nums2[p2];
    //         p2++;
    //     }
    // }
    let p1 = m - 1;
    let p2 = n - 1;

    for (let x = nums1.length - 1; x >= 0; x--) {
        if(p2 < 0){
            break;
        }
        if(nums2[p2] > nums1[p1] || p1<0){
            nums1[x] = nums2[p2];
            p2--;
        } else {
            nums1[x] = nums1[p1];
            p1--;
        }
    }
};