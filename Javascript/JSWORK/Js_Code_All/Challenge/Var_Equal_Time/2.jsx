0:::::::::::::::::::::::::::::::::

// | Method             | Example              | Works? |
// | ------------------ | -------------------- | ------ |
// | `String()`         | `String(45)`         | ✅      |
// | `" " + value`      | `45 + ""`            | ✅      |
// | Template literal   | `` `${45}` ``        | ✅      |
// | `JSON.stringify()` | `JSON.stringify(45)` | ✅      |


let two = 45;
let s = two + "";
console.log(s);          // "45"
console.log(typeof s);   // string

let two = 45;
let s = String(two);
console.log(s);          // "45"
console.log(typeof s);   // string


1:::::::::::::: ----------------------->>
✅ 3) Template Literal (${})
let two = 45;
let s = `${two}`;
console.log(s);          // "45"
console.log(typeof s);   // string

🔥 WHY does ${str} become a string?

Because template literals always produce a STRING, no matter 
what values you insert inside ${ }.

Used a lot in modern JS.
📌 Why does Template Literal always produce a string?

Because a template literal (` ... `):
Is meant for string formatting
Is always treated as a string expression
Even if you include numbers, booleans, arrays — they get converted to string

✔️ Summary
${value} → always returns a string
Because template literals internally call String(value)