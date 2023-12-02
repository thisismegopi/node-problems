/*
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]
*/

const checkPalindrome = (input: string[]) => {
    const palindromArr = [];
    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input.length; k++) {
            if (i === k) continue;
            const concat = input[i] + input[k];
            const reverseString = concat.split('').reverse().join('');
            if (concat === reverseString) {
                palindromArr.push([i, k]);
            }
        }
    }

    console.log(palindromArr);
};
const inputs = ['abcd', 'dcba', 'lls', 's', 'sssll'];

checkPalindrome(inputs);
