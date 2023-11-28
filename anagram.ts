/*Write a function to check whether two given strings are anagram of each other or not.
An anagram of a string is another string that contains the same characters, only the order of characters can be different.
For example, “abcd” and “dabc” are an anagram of each other.
 */

const checkAnagram = (str1: string, str2: string) => {
    const sortedArr1 = str1.split('').sort();
    const sortedArr2 = str2.split('').sort();

    let isAnagram = false;

    if (sortedArr1.length === sortedArr2.length && sortedArr1.join() === sortedArr2.join()) {
        isAnagram = true;
    }

    return isAnagram;
};
console.log(checkAnagram('abcd', 'bbac'));
