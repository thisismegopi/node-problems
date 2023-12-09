/*
[2,1,3,4,1]
[1,1,3,2,4]
*/

const checkArr = (arr1: number[], arr2: number[]) => {
    const firstArr = arr1.sort();
    const secondArr = arr2.sort();

    let isSame = true;
    if (firstArr.length !== secondArr.length) {
        isSame = false;
    } else {
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                isSame = false;
            }
        }
    }
    return isSame;
};

console.log(checkArr([3, 1, 3, 4, 1], [1, 1, 3, 2, 4]));
