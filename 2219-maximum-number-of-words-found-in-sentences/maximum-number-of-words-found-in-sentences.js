/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = -1;

    for(let x = 0; x < sentences.length; x++) {
        let splitSen = sentences[x].split(" ");

        max = Math.max(max, splitSen. length);
    }

    return max; 
}
    