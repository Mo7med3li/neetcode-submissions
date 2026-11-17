class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length!==t.length) return false 
        const map = new Map()
        for (const chars of s){
            map.set(chars,(map.get(chars)||0)+1)
        }
    for(const chars of t){
        if(!map.get(chars)){
            return false
        }
        map.set(chars,map.get(chars)-1)
    }
        return true
    }
}
