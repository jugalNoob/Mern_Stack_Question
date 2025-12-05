const UserApi=async()=>{
    const [Api1 , Api2]=await Promise.all( //
     [fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/users')
     ]
    )
    let api=await Api2.json()
    console.log(api)

}

UserApi()

| Method         | Resolve          | Reject        |
| -------------- | ---------------- | ------------- |
| **all**        | When all succeed | If any fails  |
| **allSettled** | Always           | Never fails   |
| **any**        | First success    | When all fail |  |
| ---------- | --------------------------------- | ---------------- |
| **race()** | First settled (resolve OR reject) | If first fails   |
| **any()**  | First resolve only                | Only if ALL fail |
| **all()**  | When ALL resolve                  | If ANY fails     |


// ---- >>  -------------------------------->>

const slowTask = new Promise(res =>
  setTimeout(() => res("Slow done"), 1000)
);
const cancel = new Promise((_, reject) =>
  setTimeout(() => reject("Cancelled"), 200)
);
Promise.race([slowTask, cancel])
  .then(console.log)
  .catch(console.log);