// If you want next 🔥
// ➡️ await outside async (why not allowed)
// ➡️ Promise internal states
// ➡️ Microtask execution demo



// setTimeout(()=>{
//     console.log('i am setTime Out')
// })

console.log('hjelloo')


async function processItems() {
  const items = [1, 2, 3, 4, 5];

  const promises = items.map(item => doAsyncTask(item));
  await Promise.all(promises);

  console.log("Done" , 'i am jugal');
}
