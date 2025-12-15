🔥 Intermediate String Tricky Questions
1. Reverse a string with emojis/unicode safely
const str = "💖abc";
console.log([...str].reverse().join('')); 
// or
console.log(Array.from(str).reverse().join(''));



Trick:

split('') breaks emojis / surrogate pairs

Use Array.from() or spread [...str] to preserve them

2. Count unique characters
const str = "hello";
console.log(new Set(str).size); // 4 (l counted once)


Trick: Use Set to remove duplicates

Works even for emoji: "💖💖a" → new Set(str).size = 2

3. Check if string contains only digits
const str = "12345";
console.log(/^\d+$/.test(str)); // true


Trick: isNaN(str) can fail, " " or " 123" returns false

Regex is safer

4. Reverse words in a sentence
let str = "I love JS";
console.log(str.split(' ').reverse().join(' ')); // "JS love I"


Trick: split('') → reverses characters, not words

5. Convert string to camelCase
let str = "hello world";
let camel = str
  .split(' ')
  .map((w,i) => i ? w[0].toUpperCase() + w.slice(1) : w)
  .join('');
console.log(camel); // helloWorld


Trick: Combine map + index

6. Remove whitespace / all spaces
let str = " a b c ";
console.log(str.replace(/\s/g, '')); // "abc"


.trim() only removes start/end, not middle spaces

7. Swap case of each letter
let str = "HeLLo";
let swapped = [...str].map(c =>
  c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
).join('');
console.log(swapped); // "hEllO"


Trick: Use map on spread array to handle each character

8. Palindrome check ignoring case & spaces
let str = "A man a plan a canal Panama";
let clean = str.toLowerCase().replace(/\s/g, '');
console.log(clean === [...clean].reverse().join('')); // true


Trick: normalize string first

9. Generate array of character codes
let str = "ABC";
console.log([...str].map(c => c.charCodeAt(0))); // [65, 66, 67]


Trick: str.charCodeAt() works per character; spread helps iterate

10. Tricky: Sparse strings or holes
let arr = Array(3);
console.log(arr.join('-')); // "--"
console.log(Array.from(arr, (_,i) => i)); // [0,1,2]


Trick: Sparse arrays behave differently in loops vs Array.from()

⚡ Tips for String Tricks

Always use Array.from() or [...str] for emojis/unicode

String methods are immutable → never expect in-place changes

Regex is your friend for validation, replacement, splitting

Map/filter with strings requires converting to array first

Be careful with sparse arrays → holes behave differently