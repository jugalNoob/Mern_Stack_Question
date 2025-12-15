❓ Q6: async with return vs without return
async function a() {
  return "hello";
}
console.log(a());

Output:
Promise { 'hello' }


Why?
Async functions always return a promise.

❓ Q7: What will this print?
async function f() {
  console.log(1);
  return 2;
}

f().then(console.log);
console.log(3);

Output:


❓ Q4: Async/Await Order
async function test() {
  console.log(1);
  await console.log(2);
  console.log(3);
}
test();
console.log(4);

Output: