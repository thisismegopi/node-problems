/*Write a function to check whether two given strings are anagram of each other or not.
An anagram of a string is another string that contains the same characters, only the order of characters can be different.
For example, “abcd” and “dabc” are an anagram of each other.
 */

const checkAnagram = (str1: string, str2: string) => {
    const sortedArr1 = str1.split('').sort().join('');
    const sortedArr2 = str2.split('').sort().join('');

    let isAnagram = false;

    if (sortedArr1 === sortedArr2) {
        isAnagram = true;
    }

    return isAnagram;
};
console.log(checkAnagram('abcd', 'bcda'));
