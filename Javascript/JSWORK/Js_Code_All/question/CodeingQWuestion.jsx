Top 50 JavaScript Coding Questions & Solutions
Strings

Reverse a String

const str = "hello";
console.log(str.split("").reverse().join("")); // "olleh"


Check if a String is Palindrome

function isPalindrome(s){
  return s === s.split("").reverse().join("");
}
console.log(isPalindrome("level")); // true


Longest Common Prefix

function longestPrefix(arr){
  if(!arr.length) return "";
  let prefix = arr[0];
  for(let i=1;i<arr.length;i++){
    while(arr[i].indexOf(prefix)!==0){
      prefix = prefix.slice(0,-1);
    }
  }
  return prefix;
}
console.log(longestPrefix(["flower","flow","flight"])); // "fl"


Reverse Words in a Sentence

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("I love JS")); // "JS love I"


Check Anagram

function isAnagram(s1,s2){
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
console.log(isAnagram("listen","silent")); // true

Arrays

Find Largest Number

const arr = [2,5,9,1];
console.log(Math.max(...arr)); // 9


Find Missing Number

function findMissing(arr){
  let n = arr.length;
  let sum = (n*(n+1))/2;
  let arrSum = arr.reduce((a,b)=>a+b,0);
  return sum - arrSum;
}
console.log(findMissing([0,1,2,4])); // 3


Sum of Array

const arr=[1,2,3,4];
console.log(arr.reduce((a,b)=>a+b,0)); // 10


Remove Duplicates

const arr=[1,2,2,3,4,4];
console.log([...new Set(arr)]); // [1,2,3,4]


Find Duplicates

const arr=[1,2,2,3,4,4];
const duplicates = arr.filter((item,index)=>arr.indexOf(item)!==index);
console.log(duplicates); // [2,4]


Flatten Nested Array

const arr=[1,[2,[3,4]],5];
console.log(arr.flat(2)); // [1,2,3,4,5]


Find Max Subarray Sum (Kadane’s Algorithm)

function maxSubArray(arr){
  let maxSoFar=arr[0], maxEnding=arr[0];
  for(let i=1;i<arr.length;i++){
    maxEnding = Math.max(arr[i], maxEnding+arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEnding);
  }
  return maxSoFar;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6


Merge Two Sorted Arrays

const a=[1,3,5], b=[2,4,6];
console.log([...a,...b].sort((x,y)=>x-y)); // [1,2,3,4,5,6]


Two Sum Problem

function twoSum(arr,target){
  const map = {};
  for(let i=0;i<arr.length;i++){
    const diff = target-arr[i];
    if(map[diff]!==undefined) return [map[diff],i];
    map[arr[i]]=i;
  }
  return [];
}
console.log(twoSum([2,7,11,15],9)); // [0,1]


Find First Non-Repeating Character

function firstNonRepeat(str){
  const freq = {};
  for(const char of str) freq[char]=(freq[char]||0)+1;
  for(const char of str) if(freq[char]===1) return char;
}
console.log(firstNonRepeat("swiss")); // "w"

Recursion

Factorial

function factorial(n){
  if(n===0) return 1;
  return n*factorial(n-1);
}
console.log(factorial(5)); // 120


Fibonacci

function fib(n){
  if(n<=1) return n;
  return fib(n-1)+fib(n-2);
}
console.log(fib(6)); // 8


Fibonacci with Memoization

const memo={};
function fibMemo(n){
  if(n<=1) return n;
  if(memo[n]) return memo[n];
  memo[n]=fibMemo(n-1)+fibMemo(n-2);
  return memo[n];
}


Sum of Natural Numbers

function sumNatural(n){
  if(n===0) return 0;
  return n+sumNatural(n-1);
}


Reverse a Number

function reverseNum(n){
  return parseInt(n.toString().split("").reverse().join(""));
}
console.log(reverseNum(12345)); // 54321

Objects & Maps

Count Frequency of Elements

const arr=[1,2,2,3,3,3];
const freq={};
arr.forEach(x=> freq[x]=(freq[x]||0)+1);
console.log(freq); // {1:1,2:2,3:3}


Deep Clone Object

const obj={a:1,b:{c:2}};
const clone=JSON.parse(JSON.stringify(obj));


Merge Objects

const obj1={a:1}, obj2={b:2};
console.log({...obj1,...obj2}); // {a:1,b:2}


Check if Object is Empty

const obj={};
console.log(Object.keys(obj).length===0); // true


Filter Object Properties

const obj={a:1,b:2,c:3};
const filtered=Object.fromEntries(Object.entries(obj).filter(([k,v])=>v>1));
console.log(filtered); // {b:2,c:3}

Functions & Closures

Debounce

function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=> fn.apply(this,args), delay);
  }
}


Throttle

function throttle(fn, limit){
  let lastCall = 0;
  return function(...args){
    const now = Date.now();
    if(now - lastCall >= limit){
      lastCall = now;
      fn.apply(this,args);
    }
  }
}


Currying

function add(a){ return function(b){ return a+b; } }
console.log(add(2)(3)); // 5


Closure Example

function outer(){
  let x=10;
  return function(){ console.log(x); }
}
const inner=outer();
inner(); // 10


Immediately Invoked Function Expression (IIFE)

(function(){ console.log("IIFE"); })();

Promises & Async/Await

Basic Promise

const p = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("Done"),1000);
});
p.then(res=>console.log(res));


Async/Await

async function fetchData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}


Promise.all

Promise.all([Promise.resolve(1),Promise.resolve(2)]).then(console.log); // [1,2]


Promise.race

Promise.race([Promise.resolve(1), new Promise(res=>setTimeout(()=>res(2),100))]).then(console.log); // 1


Handling Errors in Async

async function fetchData(){
  try{
    const res=await fetch("invalid");
  } catch(e){
    console.log("Error caught");
  }
}

Array Methods

Array.map

[1,2,3].map(x=>x*2); // [2,4,6]


Array.filter

[1,2,3,4].filter(x=>x%2===0); // [2,4]


Array.reduce

[1,2,3].reduce((a,b)=>a+b,0); // 6


Array.find

[1,2,3,4].find(x=>x>2); // 3


Array.findIndex

[1,2,3,4].findIndex(x=>x>2); // 2


Array.includes

[1,2,3].includes(2); // true


Array.some

[1,2,3].some(x=>x>2); // true


Array.every

[1,2,3].every(x=>x>0); // true


Array.sort

[3,1,2].sort((a,b)=>a-b); // [1,2,3]


Array.flat

[1,[2,[3]]].flat(2); // [1,2,3]

Advanced / Algorithmic

Check Prime Number

function isPrime(n){
  if(n<2) return false;
  for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0) return false;
  return true;
}


Balanced Parentheses

function isBalanced(str){
  const stack=[];
  const map={")":"(","]":"[","}":"{"};
  for(const c of str){
    if("([{".includes(c)) stack.push(c);
    else {
      if(stack.pop()!==map[c]) return false;
    }
  }
  return stack.length===0;
}


LRU Cache (Concept)

Use Map to store keys in order, remove least recently used key when limit exceeded.

Manual flat() Implementation

function flatten(arr){
  let res=[];
  for(const item of arr){
    if(Array.isArray(item)) res=res.concat(flatten(item));
    else res.push(item);
  }
  return res;
}


Deep Clone (Recursive)

function deepClone(obj){
  if(typeof obj !== "object" || obj===null) return obj;
  let clone = Array.isArray(obj)?[]:{};
  for(let key in obj) clone[key] = deepClone(obj[key]);
  return clone;
}
