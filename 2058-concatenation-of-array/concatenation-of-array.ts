function getConcatenation(nums: number[]): number[] {
    // Initialize an empty array to store the concatenated result
    let ans = [];

    // Store the length of the input array
    let length = nums.length;

    // Iterate through the input array
    for (let x = 0; x < length; x++) {
        // Copy the current element of nums to the corresponding position in the first half of ans
        ans[x] = nums[x];

        // Copy the current element of nums to the corresponding position in the second half of ans
        // By using ans[x + length], we directly assign the value, avoiding dynamic resizing
        ans[x + length] = nums[x];
    }

    // Return the concatenated array
    return ans;
};
