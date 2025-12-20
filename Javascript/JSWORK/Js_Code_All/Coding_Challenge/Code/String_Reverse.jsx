// 5. Reverse the string
const reversedStr = str.split('').reverse().join('');
console.log("Reversed:", reversedStr);

const isPalindrome = str === reversedStr;
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");




 // revers string without methods  ..............................::::::::::::::::::::::::

let string="jugal sharma"

let reversedstring=""

for(let index=string.length-1; index >= 0; index--){

   reversedstring+=string[index]
}

console.log(reversedstring); // Output: