
let news=new Map()
let data=[10 , 20 , 30]

news.set(1123 ,  data)
console.log(news.get(1123)) // it run 


const cashe=new Map()

const cache = new Map()

setInterval(() => {
  if (cache.has('jugal')) {
    console.log('Cache hit:', cache.get('jugal'))
    return
  }

  console.log('Cache miss')
  cache.set('jugal', 'karan')
}, 2000)



00000000000000000000  ---------------------->>>

const cache = new Map()

function setCache(key, value, ttl) {
  cache.set(key, value)
  setTimeout(() => cache.delete(key), ttl)
}

setInterval(() => {
  if (cache.has('jugal')) {
    console.log('Cache hit:', cache.get('jugal'))
  } else {
    console.log('Cache miss')
    setCache('jugal', 'karan', 3000)
  }
}, 2000)



:::::::::::::::: clouser User  ::::::::::::::

const outer = () => {
  const cache = new Map()
  let count = 0

  const intervalId = setInterval(() => {
    if (cache.has('jugal')) {
      console.log('cache hit', cache.get('jugal'))
    } else {
      console.log('cache miss')
      cache.set('jugal', 'karan')
    }

    count++

    if (count > 5) {
        cache.delete('jugal')
      console.log('clearing interval')
      clearInterval(intervalId)
    }
  }, 2000)
}

outer()
