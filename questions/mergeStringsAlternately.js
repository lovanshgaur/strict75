// Q.1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.



function fun(wordA, wordB) {

    let splitA = wordA.split('');
    let splitB = wordB.split('');

    let i = splitA.length
    let j = splitB.length


    let word, currWord;

    if (i === j) {
        let mergedWord = [];
        for (let n = 0; n < j; n++) {
            mergedWord.push(splitA[n])
            mergedWord.push(splitB[n])
            currWord = [...mergedWord]
        }
        word = currWord.join(' ')
        console.log(word)
        return word;
    }
    else if (i < j) {
        let mergedWord = [];
        for (let n = 0; n < i; n++) {

            mergedWord.push(splitA[n])
            mergedWord.push(splitB[n])
            currWord = [...mergedWord]

        }
        const newB = splitB.slice(i)
        word = [...currWord, ...newB].join(' ')
        console.log(word)
        return word;
    }
    else if (j < i) {
        let mergedWord = [];
        for (let n = 0; n < j; n++) {

            mergedWord.push(splitA[n])
            mergedWord.push(splitB[n])
            currWord = [...mergedWord]

        }
        const newA = splitA.slice(j)
        word = [...currWord, ...newA].join(' ')
        console.log(word)
        return word;
    }
}

fun('abc', 'pqr');
fun('ab', 'pqrs');
fun('abcd', 'pq');

