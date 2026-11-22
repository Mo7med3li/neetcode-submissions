class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedWord = ""
        for(const word of strs){
            encodedWord+=`${word.length}#${word}`
        }

        return encodedWord
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const original:string[] = []
        let i = 0
        while(i < str.length){
           let j = i
           while(str[j] !== "#"){
               j++
           }
           const length = +str.slice(i, j)
           original.push(str.slice(j + 1, j + 1 + length))
           i = j + length + 1
        }
        return original
    }
}
