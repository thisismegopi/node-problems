/*

Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:
let arr = [
[1,2,3],
[4, 5, 6],
[9, 8, 9]
]
 
The left-to-right diagonal = 1 + 5 + 9.
The right to left diagonal =  3 + 5 + 9
Their absolute difference is: 15 - 17 = 2

*/
const input: number[][] = [
    [10, 2, 3],
    [4, 5, 6],
    [19, 8, 9],
];

const findAbsDiff = (input: number[][], direction: 'ltr' | 'rtl') => {
    let diff1 = 0;
    let diff2 = 0;
    if (direction === 'ltr') {
        let total = 0;
        let currItration = 0;
        for (let i = 0; i < input.length; i++) {
            total = total + input[i][currItration];
            currItration++;
        }
        diff1 = total;
    } else if (direction === 'rtl') {
        let total = 0;
        let currItration = 2;
        for (let i = 0; i < input.length; i++) {
            total = total + input[i][currItration];
            currItration--;
        }
        diff2 = total;
    }
    return diff1 + diff2;
};

const abs = Math.abs(findAbsDiff(input, 'ltr') - findAbsDiff(input, 'rtl'));

console.log('The left-to-right diagonal ' + findAbsDiff(input, 'ltr'));
console.log('The right-to-left diagonal ' + findAbsDiff(input, 'rtl'));
console.log('Their absolute difference is ' + abs);
