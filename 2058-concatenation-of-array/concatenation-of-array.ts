function getConcatenation(nums: number[]): number[] {
    let ans = [...nums];

    for (let x = 0;nums[x]; x++) {
        ans.push(nums[x]);
    }

    return ans;
};