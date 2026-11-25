class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        const sortedArray = nums.sort((a, b) => a - b);

        let current = 1;
        let longest = 1;

        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] - sortedArray[i - 1] === 1) {
                current++;
            } else if (sortedArray[i] === sortedArray[i - 1]) {
                continue;
            } else {
                current = 1;
            }

            longest = Math.max(longest, current);
        }

        return longest;
    }
}
