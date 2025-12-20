✅ Correct rule (MEMORIZE THIS)

.then(), .catch(), and .finally() ALL run as microtasks.

🔑 Summary of All Promise Types

new Promise() → create promise

.then(), .catch(), .finally()

Promise.resolve() / Promise.reject()

Promise.all() → all must succeed

Promise.allSettled() → wait for all, succeed or fail

Promise.race() → first to settle wins

Promise.any() → first success wins

async/await → modern syntax

Nested promises → possible, but chaining better



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

