class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
  topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()
        const freq=Array.from({ length: nums.length+1 }, () => [])
        const result=[]
        for(const num of nums) {
            map.set(num , (map.get(num)||0)+1)
        }
       for(const [key , value] of map.entries()){
       
         freq[value].push(key)
       }
        for(let i = freq.length -1 ; i >0 ; i--){
        for (const num of freq[i] ){
           result.push(num)
            if(result.length===k) return result
        }
    }
        return []
    }
}
