// console.time("Execution Time");

function findSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.timeEnd("Execution Time");

// ✅ Corrected Memoization Function
const Memoization = (fn) => {
    let cache = {};

    return function (n) {
        if (n in cache) {
            console.log("Fetching from cache:", n);
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};

const MemoizedSum = Memoization(findSum);

console.time("Memoized Execution");
console.log(MemoizedSum(500)); // First call, computes sum
console.log(MemoizedSum(500)); // Second call, retrieves from cache
console.timeEnd("Memoized Execution");


console.time("start");

for (let i = 0; i <500; i++) {
   console.log(i)
}

console.timeEnd("start");


Conclusion
Memoization is an essential optimization technique in JavaScript. It is useful for:
✅ Optimizing recursive functions (e.g., Fibonacci, Factorial)
✅ Reducing redundant API calls
✅ Enhancing search/autocomplete performance
✅ Preventing unnecessary UI re-renders in React
✅ Improving event handling (debounce & throttle) 