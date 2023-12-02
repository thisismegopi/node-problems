/*
Write a function that converts given input string  parameter as below example
Input - “1(AB)3(XY)2(MNO)4(PQR)”
Output - ABXYXYXYMNOMNOPQRPQRPQRPQR
*/

const generateStr = (input: string) => {
    let result = '';
    const splitedNums = input.split(')');
    splitedNums.forEach(v => {
        const [numbers, seq] = v.split('(');
        if (numbers && seq) {
            result += seq.repeat(Number(numbers));
        }
    });
    console.log(result);
};
generateStr('1(AB)3(XY)2(MNO)4(PQR)');
