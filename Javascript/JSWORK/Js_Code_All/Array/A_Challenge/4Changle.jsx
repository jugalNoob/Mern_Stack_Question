🎯 Why this happens (KEY CONCEPT)

delete removes the property, not the array element.

In JavaScript, arrays are objects.

Indexes (0, 1, 2, 3) are just object keys

delete removes the key

It does NOT shift elements

It does NOT change length

let data=[10 , 20 , 30 , 40]

delete data[1]
console.log(data)

console.log(data.length)

:::::::::::::::::  ---------------------->???????????

🏆 One-Line Interview Answer

A sparse array is an array with missing indexes 
(holes). JavaScript allows empty slots, 
counts them in length,
 but skips them in iteration.

let data=[10 , , ,, 20]


console.log(data.slice(0 , 2))


for(let datas in data){
    console.log(datas)
}

data[1]='jugal  sharma'
console.log(data)

data.length=2
console.log(data)
