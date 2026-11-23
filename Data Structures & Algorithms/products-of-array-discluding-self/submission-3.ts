class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // O(n) 
    productExceptSelf(nums: number[]): number[] {
            
    const result: number[] = [];
           
     let running = 1;

    for (let i = 0; i < nums.length; i++) {
   
    result.push(running) 
   
    running =nums[i] * running
    }

    running =1
    for (let i = nums.length-1 ; i >=0; i--) {    
    result[i]= running * result[i]
    running =running*nums[i]    
    }
        return result
    }
}
