Good 👍
Your code works, but it has an important conceptual
 mistake that interviewers LOVE to test.

Let’s break it line by line + conceptually.

✅ Your Code (What it DOES)
fs.writeFile('./file/jugal.txt', 'hi i am use append', 'utf-8', () => {
  console.log('complete')

  fs.readFile('./file/jugal.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
})

Output
complete
hi i am use append

❌ Conceptual Problem
You wrote:

"hi i am use append"

But you used:

fs.writeFile()

🔥 Interview Truth

fs.writeFile() does NOT append
It OVERWRITES the file.

So if jugal.txt already had:

Hello World


After this code, it becomes:

hi i am use append


❗ Old data is deleted.

✅ Correct Way to APPEND
Use fs.appendFile()
fs.appendFile('./file/jugal.txt', 'hi i am use append', 'utf-8', () => {
  console.log('complete')

  fs.readFile('./file/jugal.txt', 'utf-8', (err, data) => {
    if (err) console.log(err)
    else console.log(data)
  })
})

🧠 Why your code still printed data?

Because:

writeFile finished

Then readFile read the new overwritten content

⚠️ Interview Trap Question

❓ Can writeFile behave like append?

✅ Yes — but ONLY if you:

Read file first

Manually merge data

Write back

fs.readFile('a.txt', 'utf8', (err, old) => {
  fs.writeFile('a.txt', old + 'new', () => {})
})


⛔ Still NOT safe for concurrency

🔥 Professional Pattern (No Callback Hell)
const fs = require('fs/promises')

async function run() {
  await fs.appendFile('./file/jugal.txt', 'hi i am use append', 'utf-8')
  const data = await fs.readFile('./file/jugal.txt', 'utf-8')
  console.log(data)
}

run()

🎯 Interview Su

writeFile → overwrite
appendFile → append
writeFile never appends automatically


async function readFile() {
  try {
    const data = await fs.readFile('./file/jugal.txt', 'utf-8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

readFile()


🧩 Interview Trap Question

❓ Why try/catch doesn’t work with fs.readFile callback?

✅ Because:

Errors happen after the current call stack

try/catch only catches sync errors




🟢 CREATE (write file)

Creates a file or overwrites if it already exists.

fs.writeFile(path, 'Hello Jugal 🚀', 'utf-8', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('✅ File created')
})

🔵 READ (read file)
fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('📖 File content:', data)
})

🟡 UPDATE (append / modify)
➕ Append data (most common)
fs.appendFile(path, '\nUpdated content ✨', 'utf-8', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('✏️ File updated')
})

🔁 Replace content (read → modify → write)
fs.readFile(path, 'utf-8', (err, data) => {
  if (err) return console.error(err)

  const updatedData = data.replace('Hello', 'Hi')

  fs.writeFile(path, updatedData, 'utf-8', (err) => {
    if (err) return console.error(err)
    console.log('✏️ File modified')
  })
})

🔴 DELETE (remove file)
fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('🗑️ File deleted')
})

🚀 MODERN WAY (Promise + async/await)
const fs = require('fs/promises')

async function crud() {
  try {
    // CREATE
    await fs.writeFile(path, 'Hello Jugal', 'utf-8')

    // READ
    const data = await fs.readFile(path, 'utf-8')
    console.log(data)

    // UPDATE
    await fs.appendFile(path, '\nUpdated!', 'utf-8')

    // DELETE
    await fs.unlink(path)
  } catch (err) {
    console.error(err)
  }
}

crud()