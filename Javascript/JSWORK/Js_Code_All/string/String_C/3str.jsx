🚀 20+ Intermediate/Advanced String Tricks in JavaScript
1. Reverse a string safely (with emojis/unicode)
const str = "💖abc";
console.log([...str].reverse().join('')); // "cba💖"


Pitfall: split('') breaks surrogate pairs (emojis).
Tip: Use Array.from() or spread [...str].

2. Count unique characters
const str = "hello💖";
console.log(new Set(str).size); // 6


Set removes duplicates automatically.

Works for emoji too.

3. Check if a string contains only digits
let str = "12345";
console.log(/^\d+$/.test(str)); // true


Pitfall: isNaN() fails on strings like " 123 " or empty strings.

4. Reverse words in a sentence
let str = "I love JS";
console.log(str.split(' ').reverse().join(' ')); // "JS love I"


Pitfall: split('') reverses characters, not words.

5. Convert string to camelCase
let str = "hello world from js";
let camel = str
  .split(' ')
  .map((w,i) => i ? w[0].toUpperCase() + w.slice(1) : w)
  .join('');
console.log(camel); // helloWorldFromJs

6. Remove all whitespaces
let str = " a b c ";
console.log(str.replace(/\s/g, '')); // "abc"


Tip: .trim() only removes start/end spaces, not middle spaces.

7. Swap case of each character
let str = "HeLLo";
let swapped = [...str].map(c =>
  c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
).join('');
console.log(swapped); // hEllO

8. Palindrome check ignoring case & spaces
let str = "A man a plan a canal Panama";
let clean = str.toLowerCase().replace(/\s/g, '');
console.log(clean === [...clean].reverse().join('')); // true

9. Generate array of character codes
let str = "ABC";
console.log([...str].map(c => c.charCodeAt(0))); // [65,66,67]

10. Sparse arrays / holes
let arr = Array(3);
console.log(arr.join('-')); // "--"
console.log(Array.from(arr, (_,i) => i)); // [0,1,2]


Tip: Sparse arrays behave differently in loops vs Array.from().

11. Count vowels in a string
let str = "Hello World";
let count = (str.match(/[aeiou]/gi) || []).length;
console.log(count); // 3

12. Capitalize first letter of each word
let str = "hello world";
let res = str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
console.log(res); // "Hello World"

13. Check if string contains another string (case-insensitive)
let str = "JavaScript";
console.log(str.toLowerCase().includes("script")); // true

14. Repeat a string n times
let str = "ha";
console.log(str.repeat(3)); // "hahaha"

15. Pad a string
console.log("5".padStart(3,'0')); // "005"
console.log("5".padEnd(3,'0'));   // "500"

16. Convert string to array safely
console.log(Array.from("💖abc")); // ["💖","a","b","c"]


Tip: Better than split('') for emojis.

17. Remove duplicate characters
let str = "aabbcc";
let unique = Array.from(new Set(str)).join('');
console.log(unique); // "abc"

18. String to number safely
let str = "123.45";
console.log(Number(str));    // 123.45
console.log(parseInt(str));  // 123
console.log(parseFloat(str));// 123.45


Pitfall: +"123abc" → NaN, always validate input.

19. Slice substring safely
let str = "JavaScript";
console.log(str.slice(4,10)); // "Script"
console.log(str.substring(4,10)); // "Script"


Trick: .slice supports negative index, .substring does not.

20. Replace all occurrences
let str = "foo bar foo";
console.log(str.replace(/foo/g, "baz")); // "baz bar baz"


Pitfall: replace("foo", "baz") only replaces first occurrence.

21. Check if string is numeric
let str = "123";
console.log(!isNaN(str) && str.trim() !== ""); // true


Regex: /^\d+$/ is safer.

22. Count occurrences of a character
let str = "hello";
let count = [...str].filter(c => c === 'l').length;
console.log(count); // 2

23. Truncate string with ellipsis
let str = "Hello World";
console.log(str.length > 5 ? str.slice(0,5) + "..." : str); // "Hello..."

24. Convert string to array of words
let str = "I love JS";
console.log(str.split(/\s+/)); // ["I","love","JS"]


Regex handles multiple spaces.

25. Compare strings ignoring case
let a = "Hello";
let b = "hello";
console.log(a.toLowerCase() === b.toLowerCase()); // true
