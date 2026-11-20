class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // o(n log n)
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()
        const result=[]
        for(let i =0 ; i < nums.length ; i ++) {
            map.set(nums[i] , (map.get(nums[i])||0)+1)
        }
       const mapArray = [...map].sort((a,b)=> b[1] - a[1])
        for (let i = 0 ; i < k ; i++){
        result.push(mapArray[i][0])
        }
        return result
    }
}
