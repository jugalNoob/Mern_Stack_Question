


// If you want next:

// 10..toString() 🤯 why double dot?

// null.toString() error explained

// String() vs .toString()

// Primitive vs wrapper objects

// If you want next:

// 10..toString() 🤯 why double dot?

// null.toString() error explained

// String() vs .toString()
// console.log(+'' == 0  + true)
// Great confusion — this one is subtle, and your doubt is 100% valid 👍
// console.log(0 === 0 + true) // noth 0 == 0 beome  
// // true + true answe 2 why false


// console.log(null + 1 === 1)
// console.log(0 + 1 === 1)

// console.log(undefined + 1 === NaN)
// console.log(Number(undefined) + 1 === NaN  )


// console.log(typeof ( true + true + '5'))
// console.log(1 + 1 + '5')
// 🎯 INTERVIEW ONE-LINER (GOLD)

// Arrays stringify to empty strings, objects stringify to 
// [object Object], and == compares objects by reference 
// but primitives by value after coercion.

// console.log([] + []) // why so emty
// console.log([] + {}) // why object object
// console.log([] == 0) // Why true
// console.log([] == {}) //why  flase 
// console.log([] == []) // why false
// console.log([] + {} + {}) // [object Object][object Object]
// console.log([] + {} + []) /// why  show to [object object]

// console.log(5 + null)
// console.log(5 +true)
// console.log(5 + false)

// console.log(5 + undefined)


// console.log(2 - true)
// console.log(2 - undefined)
// console.log(2 * true)

// console.log(2 / true)



// // console.log(Boolean([]));
// // console.log(Boolean({}));
// // console.log(Boolean(""));
// // console.log(null == undefined)
// let a = 10;
// console.log(delete a);
// console.log(a)

// // 🔥 11. Operator precedence nightmare
// console.log( typeof 5 + 10 );

// 🔥 20. Trickiest Logical Chain
// console.log(0 || null && "yes" || false || "done");

// Output:
// "done"


// Breakdown order:
// && first → null && "yes" → null
// Chain:
// 0 || null || false || "done" → first truthy → "done"
// // 🔥 7. in operator
// console.log("x" in { x: 10 });
// console.log(1 in [10,20,30]);
// console.log(5 in [10,20,30]);

// // 🔥 6. void operator

// console.log(void 0);
// console.log(void (1 + 2));

// let x;
// console.log(x = x == x === x);

// console.log(null ?? "default");
// console.log(0 ?? "default");

// NaN is never equal to anything, not even itself.

// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log([..."jugal"]);
// false
// false
// console.log(10  || 11)
// console.log(10 && 11)

// const a=() =>console.log('a')
// const b=() =>console.log('b')
// const c='c'
// const d='d'

// console.log((a() && b() || c ||d ))

// console.log(Promise.resolve(5) == 5);

// console.log(typeof Promise.resolve() )

// let fn1 = () => "hi";
// let fn2 = () => "hello";

// console.log((fn1 || fn2)());
// console.log((fn1 && fn2)());

// let [a = 10, b = a * 2] = [undefined, 5];
// console.log(a, b);
// console.log( typeof Object);

// console.log(typeof {});

// let obj = {};
// obj[1] = "A";
// obj["1"] = "B";
// console.log(obj);


// console.log(String(test())); // [object Promise]
// console.log([1,2] == "1,2");

// 🔥 10. Double NOT (!!) deep trick
// console.log(!![]);
// console.log(!!{});
// console.log(!!"0");
// console.log(!!0);


// let [a = 10, b = a * 2] = [undefined, 5];
// console.log(a, b);



// let x;
// console.log(x = 20);

// Output:
// 20





// setTimeout(()=>{
// 🔥 20. isNaN() vs Number.isNaN()
// console.log(isNaN("hello"));
// console.log(Number.isNaN("hello"));
// },2000)





// class A {}
// console.log(typeof A);


// let x = 5;

// function outer() {

//     let x=20
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// console.log(x)
// outer();

// console.log(Number(String))

// console.log('9' >= '9')
// const insta=null
// console.log(typeof insta === 'object')
// console.log(insta === null)

// console.log(typeof null )
// console.log(typeof null === typeof Object)

// console.log(typeof Object)


// const obj={a:'jugal'}

// const {b}=obj

// console.log(b)

// let a=b=0

// console.log(a)
// console.log(b)



// ⭐ But VERY IMPORTANT:

// a is declared with let
// b is NOT declared, so JavaScript creates b as a global variable (BAD PRACTICE)
// So the code behaves like:

// var b = 0;  // auto created global
// let a = 0;


// Q what ? 7
// let a=[1  , 2 , 3]

// let b=a.findIndex(x=>x===4)
// console.log(b)

// Anmswe show -1

// | Method        | When Value NOT Found | Why                              |
// | ------------- | -------------------- | -------------------------------- |
// | `find()`      | `undefined`          | Because no element matched       |
// | `findIndex()` | `-1`                 | Because no matching index exists |







// Q ::  Important check array all Thinks ? 6
//     let data=[10 , 20 , 30 , 40 , 50]

// console.log(data[0] , 'start') //start array index start 0
// console.log(data.length , 'length') //length start is 1 
// console.log(data.at(-1) , 'last length') // check array last number
// console.log(Math.floor(data.length/2)  , 'center')// chrck Array center number
// console.log(data[data.length - 1]
// )






// Q what ? 10

// let io=[10 , 20 , 320 , 40]

// io.length=0

// console.log(io)
// console.log(io.length)
// console.log(io[3])
