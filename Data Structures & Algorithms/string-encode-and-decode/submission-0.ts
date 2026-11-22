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
        console.log(encodedWord)
        return encodedWord
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
    let i = 0;

    while (i < str.length) {
        const hash = str.indexOf("#", i);               
        const wordLength = Number(str.slice(i, hash));      
        const wordStart = hash + 1;                           
        const wordEnd = wordStart + wordLength;                   

        result.push(str.slice(wordStart, wordEnd));
        i = wordEnd;                                      
    }

    return result;
    }
}
