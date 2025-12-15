function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));


A variadic function is a function that can 
accept any number of arguments.

✅ How JavaScript supports variadic functions



2️⃣ arguments object ❌ (Old style)
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3));


📌 arguments: