
// Dense vs Sparse arrays
// How JS stores arrays internally

Q Important Example Interview question ?
let arr=['jugal' , 'karan' , 'anku' , 'sharma']

arr[10]='nikhile'

console.log(arr.length)
console.log(arr[10])
console.log(arr[5])
console.log(arr)


    Q Important check array all Thinks ?
    let data=[10 , 20 , 30 , 40 , 50]

console.log(data[0] , 'start') //start array index start 0
console.log(data.length , 'length') //length start is 1 
console.log(data.at(-1) , 'last length') // check array last number
console.log(Math.floor(data.length/2)  , 'center')// chrck Array center number
console.log(data[data.length - 1]
)


Q What New Important ?
let arr=[1]
arr.length=4
arr[3]=2


for(let i in arr){
    console.log(i)
}

for(let i of arr){
    console.log(i)
}


00000000000000000000000000000000000000 ------------------------>>>

Q what Important Changgle?

const Uio=[10 , 20 , 30 , 40]

Uio[-1]='jugal'
console.log(Uio.length)
console.log(Uio)


🧠 Why does -1: 'jugal' appear?
🔑 Key Rule (VERY IMPORTANT)

JavaScript arrays are objects.

Array indexes are only non-negative integers (0, 1, 2, ...).

What happens here?
Uio[-1] = 'jugal';


-1 is not a valid array index

JS converts -1 to a string key "-1"

So this becomes an object property, NOT an array element

Equivalent to:

Uio["-1"] = "jugal";

❌ Why length does NOT change
console.log(Uio.length); // 4


Because:

length only counts numeric indexes

Object properties do not affect length

🔬 Proof
console.log(Uio[0]);   // 10
console.log(Uio[-1]);  // jugal


Works because arrays are objects.

🧠 Visual Model
Array memory:
0 → 10
1 → 20
2 → 30
3 → 40

Object property:
"-1" → "jugal"

⚠️ Common Interview Trap
arr[-1] // ❌ NOT last element

Correct ways to get last element
arr[arr.length - 1]
arr.at(-1)        // ✅ modern JS

🔥 Important Note (at() method)
Uio.at(-1); // 40


This is the only correct negative index support in JS arrays.

🎯 Interview One-Liner

Negative indexes in JavaScript arrays become object properties,
 not array elements, so they don’t affect length.

🧩 Final Mental Model
Array index → non-negative integer only
Negative index → object key


0000000000000000000000000000000000000000 ::::::::::::::::::::::::::-------------->>>>


Q what Array Index?
let arr=[]
arr[100]='jugal'

console.log(arr.length)



Q waht is Important ?
let io=[10 , 20 , 320 , 40]

io.length=0

console.log(io)
console.log(io.length)
console.log(io[3])


000000000000000 ::::::::::::::::::-------------------->>
1️⃣ console.log([] == []) // false
❓ Why false?
Because arrays are objects in JavaScript.
👉 Objects are compared by reference, not by value.
[] == []

Left [] → new object in memory
Right [] → another new object in memory
Different memory addresses ❌
📦 Think like this:

[]  --> 0x123
[]  ---> 0x456
So:
0x123 == 0x456 // false
✅ Rule:

Object == Object → compares reference, not content



00000000000000000000000000000000000000:::::::::::::::------------>>

2️⃣ Important 
let data = [9, 2, 1]
let news = data
console.log(data == news) // true
❓ Why true?
Here, both variables point to the SAME array in memory.
news = data
📦 Memory:
data ----┐
         ├──> [9,2,1]
news ----┘

So comparison becomes:
sameReference == sameReference // true
⚠️ Mutation proof:
news.push(100)
console.log(data) // [9,2,1,100]
✅ Rule:

Same reference → true

0000000000000000000 :::::::::::::::::-------------------->>>

3️⃣ console.log([1] == 1) // true
🔥 This is PURE TYPE COERCION

Steps JavaScript follows:

Step 1: Object → Primitive
[1].toString() → "1"

Step 2: String → Number
"1" → 1

Final comparison:
1 == 1 // true


💡 Internally:

[1] == 1
"1" == 1
1 == 1


✅ Rule:

== converts objects → primitives → numbers



4️⃣ console.log([1] - 1) // 0
❓ Why subtraction works?

Because - is numeric-only operator

Step-by-step:
[1] → "1" → 1


Then:

1 - 1 = 0


💡 Any math operator (- * /) forces number conversion.

🔥 Interview GOLD Rules (Remember These)
✅ == (loose equality)

Does type coercion

Converts arrays/objects → primitives

Very tricky 😈

❌ === (strict equality)

No type conversion

Always safer ✅