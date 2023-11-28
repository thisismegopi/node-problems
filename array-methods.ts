const data = [
    {
        name: 'john',
        age: 23,
    },
    {
        name: 'alex',
        age: 19,
    },
    {
        name: 'michale',
        age: 30,
    },
    {
        name: 'harry',
        age: 23,
    },
];

/*
 * JavaScript Array methods
 * unshift() - Inserts new elements at the start of an array, and returns the new length of the array.
 * shift() - Removes the first element from an array and returns removed item
 * pop() - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 * push() - Appends new elements to the end of an array, and returns the new length of the array.
 * concat() - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 * slice() - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array
 * splice() - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. Modify original array
 * map() - Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * find() - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 * filter() - Returns the elements of an array that meet the condition specified in a callback function.
 * reduce() - Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * some() - Determines whether the specified callback function returns true for any element of an array.
 * every() - Determines whether all the members of an array satisfy the specified test
 */

// // unshift()
// console.log(data.unshift({ name: 'gopi', age: 24 }));
// console.log(data);

// // shift()
// console.log(data.shift());
// console.log(data);

// // pop()
// console.log(data.pop());
// console.log(data);

// // push()
// console.log(data.push({ name: 'gopi', age: 24 }));
// console.log(data);

// // concat()
// console.log(
//     data.concat([
//         { name: 'gopi', age: 24 },
//         { name: 'ryan', age: 29 },
//     ]),
// );
// console.log(data);

// // slice()
// console.log(data.slice(2, undefined));
// console.log(data);

// // splice()
// console.log(data.splice(0, 2, { name: 'gopi', age: 24 }));
// console.log(data);

// // map()
// console.log(data.map(c => (c.age < 30 ? c : null)));
// console.log(data);

// // find()
// console.log(data.find(item => item.age < 30));
// console.log(data);

// // filter()
// console.log(data.filter(item => item.age < 30));
// console.log(data);

// // reduce()
// console.log(data.reduce((prev, curr) => prev + curr.age, 0));
// console.log(data);

// // some()
// console.log(data.some(item => item.age === 32));
// console.log(data);

// every()
console.log(data.every(item => item.age === 30));
console.log(data);
