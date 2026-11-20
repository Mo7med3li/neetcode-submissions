class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
    const map =new Map<string, string[]>()
    
    for(let i=0 ; i < strs.length ; i++){
        const key= strs[i].split("").sort().join("")
        if(!map.has(key)){   
        map.set(key,[strs[i]])
        }else{
            const existArr = map.get(key)
            existArr.push(strs[i])
        }
      
    }

    return [...map.values()]
    }
}
