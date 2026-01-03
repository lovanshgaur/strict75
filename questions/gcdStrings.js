// Q.1071| Greatest Common Divisor of Strings
//For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


function fun(str1, str2) {

    let word1 = str1 + str2;
    let word2 = str2 + str1;
    let length1 = str1.length
    let length2 = str2.length

    if (word1 === word2) {
        while (true) {
            let i = length1 % length2;
            if (i === 0) break;
            length1 = length2;
            length2 = i;
        }
        const result = str1.slice(0, length2)
        return result;
    }
    else {
        return ""
    }
}
fun('abcabcabc', 'abc');