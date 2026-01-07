// Q.345 Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function fun(s) {

    let arr = s.split('')
    let vowels = new Set("aeiouAEIOU");
    let i = 0; j = arr.length - 1;
    console.log(arr.length)

    while (i < j) {
        if (!vowels.has(arr[i])) {
            i++;
        } else if (!vowels.has(arr[j])) {
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    console.log(arr.join(""))

}
fun("IceCreAm");
fun( "leetcode");