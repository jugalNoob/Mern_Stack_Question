


// const cache = new Map()

// setInterval(() => {
//   const key = 'array' // stable key

//   if (cache.has(key)) {
//     console.log('Cache hit')
//     console.log(cache.get(data))
//     return cache.get(key)
//   }

//   console.log('Cache miss')

//   const data = [10, 20, 30, 40, 50]
//   cache.set(key, data)

// }, 1000)

// console.log('jugal')


// 🔑 Golden Rule (THIS answers everything)

// Map keys must match EXACTLY
// – Primitive → value comparison
// – Object/Array → reference comparison

// There is NO conversion between them.