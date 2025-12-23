function createCache() {
  const cache = new Map()

  return {
    get(key) {
      return cache.get(key)
    },
    set(key, value) {
      cache.set(key, value)
    },
    has(key) {
      return cache.has(key)
    }
  }
}

const cache = createCache()

setInterval(() => {
  if (cache.has('jugal')) {
    console.log('cache hit', cache.get('jugal'))
  } else {
    console.log('cache miss')
    cache.set('jugal', 'karan')
  }
}, 2000)
