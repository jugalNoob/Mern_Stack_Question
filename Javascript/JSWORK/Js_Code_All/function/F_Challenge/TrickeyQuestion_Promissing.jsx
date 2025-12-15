      00::::::::: --------------->>>>>>> Promise
      
      const nameOne=new Promise((res,rej)=>{
        setTimeout(()=>{
      let obj={name:'jugal sharma' , roll:20}
rej(obj)
        },50)
       })

              const nameTwo=new Promise((res,rej)=>{
                       setTimeout(()=>{
      let obj={name:'karan sharma' , roll:20}
res(obj)
        },100)
  
       })

       Promise.allSettled([nameOne, nameTwo]).then((data)=>{
        console.log(data)
       }).catch((err)=>{
        console.log(err)
       })
       🔥 Difference Between: Promise.all, Promise.allSettled, Promise.any, Promise.race

| Method                 | When it Resolves                                        | When it Rejects                                   | Use Case                                          | Example Result                                |
| ---------------------- | ------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| **Promise.all**        | When **ALL** promises succeed                           | If **ANY** promise fails                          | When you need **all results**                     | `["a", "b", "c"]`                             |
| **Promise.allSettled** | **Always resolves** (never rejects)                     | ❌ Never rejects                                   | When you want **result of all**, even failed ones | `[{status:"fulfilled"}, {status:"rejected"}]` |
| **Promise.any**        | When the **FIRST successful** promise resolves          | If **ALL** promises fail                          | When **only one success** is enough               | `"result from fastest success"`               |
| **Promise.race**       | When the **FIRST promise (success OR failure)** settles | Same: rejects only if the first settled is reject | When speed matters — take **first response**      | `"winner"` OR error                           |


0::::::::::: --------------------------->>>> ::::::::::::::::::::::




🧠 Why this happens (Microtask Queue Order)

JavaScript uses an event loop with microtask queue
 (Promises, queueMicrotask) that runs after each synchronous block.

Promise.resolve().then(()=>{
    console.log('1')
}).then(()=>{
        console.log('2')
})

Promise.resolve().then(()=>{
    console.log('3')
})

🔍 Execution Breakdown

There are three .then() callbacks:

Promise #1
.then(() => console.log('1'))   // A
.then(() => console.log('2'))   // C (chained)

Promise #2
.then(() => console.log('3'))   // B

📌 Step-by-step:
Step 1 — Both Promises resolve immediately

They schedule microtasks:


Step 3 — Execute Task B
console.log(3)

Step 4 — Execute Task C
Order of scheduling:

Task A → console.log(1)

Task B → console.log(3)

Task C is not scheduled yet (because the first .then hasn't run yet).

Microtask Queue initially:
[A, B]

Step 2 — Execute Task A
console.log(1)


Now, Promise #1’s first .then() is completed,
so JS schedules the chained .then() → Task C

Microtask Queue becomes:

[B, C]

Step 3 — Execute Task B
console.log(3)

Step 4 — Execute Task C
console.log(2)



🎉 Final Order
1
3
2

🔥 Interview Line (Give this to impress them)

“.then() callbacks run as microtasks, and chained .then() handlers only get queued after the previous .then() finishes, so the second chain runs last.”