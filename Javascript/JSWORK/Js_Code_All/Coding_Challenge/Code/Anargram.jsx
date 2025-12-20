function checkAnagram(input1, input2) {
    const sortedInput1 = [...input1].sort().join('');
    const sortedInput2 = [...input2].sort().join('');

    return sortedInput1 === sortedInput2;
}

console.log(checkAnagram("hello", "olle"));        // true
console.log(checkAnagram([1, 2, 3], [3, 2, 1]));  // true
console.log(checkAnagram("hello", "world"));      // false
console.log(checkAnagram([1, 2, 3], [3, 2, 2]));  // false