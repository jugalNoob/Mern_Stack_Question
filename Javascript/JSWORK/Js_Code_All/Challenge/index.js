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

let x;
console.log(x = x == x === x);

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
console.log( typeof Object);

console.log(typeof {});

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





class A {}
console.log(typeof A);


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
