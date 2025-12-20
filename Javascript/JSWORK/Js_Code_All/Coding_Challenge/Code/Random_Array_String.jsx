/////////////::::::::::::: Random array multi generaty

 let arr = ["jugal", "skaran", "anku", "lion", "tiger"];
      let arr1 = ["usa", "indian", "japan", "south africa", 'brazil'];
      let arr2 = [10, 20, 30, 60, 50, 40, 60];
      let arr3 = [10.0, 20.7, 58.5, 69.780];

      // Create an array containing references to the four arrays
      let arrayOfArrays = [arr, arr1, arr2, arr3];

      // Pick a random array from arrayOfArrays
      const randomArrayIndex = Math.floor(Math.random() * arrayOfArrays.length);
      const randomArray = arrayOfArrays[randomArrayIndex];


let data=[10 , 20 , 30 , 40]

let randomes=Math.floor(Math.random()*data.length)
console.log(data[randomes])

let data = 'jugal sharma'

let string=Math.floor(Math.random() * data.length)
console.log(data[string])

let data=[10 , 20 , 30 , 40]
let randomChar = data[Math.floor(Math.random() * data.length)]
console.log(randomChar)


🔍 What is happening step-by-step?
1️⃣ Math.random()
Math.random()


Returns a random decimal number

Range:

0 (inclusive)  →  1 (exclusive)


Example outputs:

0.12
0.57
0.999


❌ Never returns 1

2️⃣ Why * data.length ?
Math.random() * data.length


Your array:

data = [10, 20, 30, 40]
data.length = 4


So now:

Math.random() * 4


Possible results:

0.0   →  3.999...


🔥 Why multiply?
Because:

Array index range = 0 → length - 1

Math.random() alone only gives 0 → 0.999

Multiplying scales the random number to your array size.

3️⃣ Why Math.floor() ?
Math.floor(Math.random() * data.length)


Math.floor() removes decimals:

| Random value | After `floor` |
| ------------ | ------------- |
| 0.2          | 0             |
| 1.9          | 1             |
| 2.7          | 2             |
| 3.99         | 3             |


✅ Now you get valid array indexes:

0, 1, 2, 3

4️⃣ Final result
data[randomes]


Random output:

10 OR 20 OR 30 OR 40

🎯 Why * is NECESSARY (Interview Answer)

❌ Without * data.length

Math.floor(Math.random())


Result:

Always 0


So:

data[0] // always 10


🔥 That’s why * data.length is required.

🧠 One-Line Interview Rule

Math.random() gives probability,
* length gives range,
Math.floor() gives index.

🔥 Common Variations (INTERVIEW FAVORITES)
Random number between 0 and 10
Math.floor(Math.random() * 11)

Random number between min and max
let min = 5
let max = 10

Math.floor(Math.random() * (max - min + 1)) + min

Random element from array (BEST PRACTICE)
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)]

🚨 Common Mistake
Math.round(Math.random() * data.length) // ❌


Why bad?

Can generate index = length

Causes undefined

🧪 Visual Analogy

Think of Math.random() as:
🎯 A dart hitting between 0 and 1

Multiplying by length stretches the dartboard to match array size.


console.log(Math.floor(Math.random() * 11)
)