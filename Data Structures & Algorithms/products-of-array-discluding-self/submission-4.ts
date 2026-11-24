class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const left = [];
        const right = [];
        const result = [];
        let arrow = 1;
        for (const n of nums) {
            left.push(arrow);
            arrow = arrow * n;
        }

        arrow = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            right.push(arrow);
            arrow = nums[i] * arrow;
        }

        for (let i = 0; i < nums.length; i++) {
            result.push(right[nums.length - i - 1] * left[i]);
        }
        return result;
    }
}
