✅ Simple Definition of .some()

.some() checks if at least one element in the array passes the given condition.
If even ONE element is true → it returns true.

If NONE pass → it returns false.


const arr = [10, 20, 30].some((elem) => {
  return elem > 10;
});

console.log(arr);


🔍 Step-by-step (trick)

Check 10 > 10 → ❌ false

Check 20 > 10 → ✅ true → STOP here

No need to check 30

Since at least one element is true → result = true

📌 Output
true


const arr = [10, 20, 30 , null].some((elem) =>{return  elem == null})

console.log(arr)


const arr = [1, 3, 5, 8];

const hasEven = arr.some(num => num % 2 === 0);

console.log(hasEven);




2:::::::::::::::::::::::::::::::::::::::::::


Every Mrhods ++++++++++++++++++++++++++



✅ Your Code
const arr = [10, 20, 30, null].every((elem) => {
  return elem > 10;
});

console.log(arr);

🔍 Step-by-Step Execution

every() checks if all elements satisfy the condition.

Array: [10, 20, 30, null]

Condition: elem > 10

10 > 10 → ❌ false

Stops immediately → because every requires all elements to pass



✅ Definition of every()

every() tests whether all elements in the array pass the provided function.

Returns true if all pass

Returns false if even one fails

Logic Trick: Think AND logic

condition1 AND condition2 AND condition3 → must all be true

✅ Custom Simple Logic for every()
function simpleEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false; // if any element fails → false
    }
  }
  return true; // all elements passed
}

✅ Usage of Custom every()
const arr = [10, 20, 30, null];

const result = simpleEvery(arr, elem => elem > 10);

console.log(result); // false

🧠 Easy Trick to Remember



| Method  | Logic | Returns           |
| ------- | ----- | ----------------- |
| some()  | OR    | true if any match |
| every() | AND   | true if all match |
