class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    //     const map = new Map()
    //     for (let i =0 ; i<nums.length;i++){
    //         map.set(nums[i],(map.get(nums[i])||0)+1)
    //     }
    //     for(const vals of map.values()){
    //         if(vals>1){
    //             return true
    //         }
    //     }
    // return false
    return new Set([...nums]).size!==nums.length
    }
    
}
