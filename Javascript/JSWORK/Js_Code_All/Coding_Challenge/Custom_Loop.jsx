🔥 INTERVIEW-LEVEL Custom Loop (Fully Configurable)
function loop(start, end, step, callback) {
  function run(i) {
    if (i > end) return;
    callback(i);
    run(i + step);
  }
  run(start);
}

loop(0, 10, 2, (value) => console.log("Value:", value));



✅ 1. Custom Loop Using Recursion (Most Common)

A loop without using for/while/do…while.

function customLoop(i = 0, limit = 5) {
  if (i > limit) return;

  console.log(i);

  customLoop(i + 1, limit);
}

customLoop();

✔ Output
0 1 2 3 4 5

✅ 2. Custom Async Loop (Delay Loop Without setInterval)

Same as setInterval but fully custom.

function customInterval(fn, delay) {
  function execute() {
    fn();
    setTimeout(execute, delay);
  }
  execute();
}

let count = 0;

customInterval(() => {
  console.log(count++);
}, 2000);


This is how setInterval is implemented internally (with setTimeout recursion).

✅ 3. Custom Loop Using Generator

Great for interview — modern JS.

function* customGenerator(limit) {
  let i = 0;
  while (i <= limit) {
    yield i++;
  }
}

const gen = customGenerator(5);
for (const num of gen) {
  console.log(num);
}

✅ 4. Custom Loop Using Array.reduce()

A loop without explicit iteration keywords.

[...Array(6)].reduce((_, __, i) => {
  console.log(i);
}, 0);

✅ 5. Custom Loop Using setTimeout Recursion (loop with stop logic)
let count = 0;

function customLoop() {
  console.log(count++);

  if (count <= 5) {
    setTimeout(customLoop, 1000);
  }
}

customLoop();

✅ 6. Custom Reverse Loop

Without for/while.

function reverseLoop(n) {
  if (n < 0) return;

  console.log(n);
  reverseLoop(n - 1);
}

reverseLoop(5);
