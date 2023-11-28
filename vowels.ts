const secondVowels = (str: string) => {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let secondVowel = '';

    for (let index = 0; index < str.length; index++) {
        if (vowels.includes(str[index])) {
            vowelCount++;
            if (vowelCount === 2) {
                secondVowel = str[index];
                break;
            }
        }
    }
    return secondVowel;
};

const a = 'hi welcome to the interview today srikar';
const res: string[] = [];
a.split(' ').forEach(v => {
    const s = secondVowels(v);
    if (s === '') return;
    res.push(s);
});
console.log(res);
