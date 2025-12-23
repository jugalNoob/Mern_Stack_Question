let data=1

console.log(data++ + ++data)

const p = Promise.resolve(10)

async function a() {
  console.log(await p)
}

async function b() {
  console.log(await p)
}

a()
b()
