/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x); //之前的加上这个数如果有增益留下，无增益直接用现在的数
        maxAns = Math.max(maxAns, pre);//把现在的数和之前最大数相比较。
    });
    return maxAns;
};
