

000::: ------>>>
function Firstfn(a='karan'){
    return  a
}
console.log(Firstfn('jugal '))
console.log(Firstfn(undefined))
console.log(Firstfn())

What happens, call by call
1) Firstfn('jugal ')

When the function is called, the parameter a is set to the argument 
value 'jugal ' (a non-undefined string).

Because an argument was provided, the default ('karan') is not used.

The function returns the value of a, which is 'jugal '.

console.log prints:


3) Firstfn()

No argument passed at all → the parameter a is undefined by default.

Default parameter is applied: a = 'karan'.

The function returns 'karan'.

console.log prints:

karan

Combined console output (exact order)
jugal 
karan
karan


Note: The trailing space in 'jugal ' will be visible in the first line (as you wrote it).

 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
1::: =--------?>>>Function name(){
return 'jugal'
}

console.log(name())

🔥 Full Explanation (Beginner → Advanced)
1️⃣ Function Declaration
function Paramet() { ... }
function → keyword to define a function.
Paramet → function name (identifier).
() → parentheses for parameters (currently empty → means no input).
{ ... } → function body (code that runs when the function is called).
✔ This is called a Function Declaration or Named Function.

2️⃣ Function Body
return 'jugfal'
return sends a value back to the place where the function is called.
'jugfal' is a string returned by the function.
✔ If a function hits return, the function stops executing.

3️⃣ Calling / Invoking Function
Paramet()
Paramet() tells JavaScript to run the function.
Without (), it won’t execute — it would just refer to the function.

4️⃣ console.log()
console.log(Paramet())
First, Paramet() executes → returns 'jugfal'
Then console.log() prints that returned value.

✔ Output:
jugfal

🎉 Summary Table

| Part            | Meaning                          |
| --------------- | -------------------------------- |
| `function`      | Creates a reusable block of code |
| `Paramet`       | Name of the function             |
| `()`            | Parameters (none here)           |
| `{}`            | Code block / function body       |
| `return`        | Sends result back                |
| `'jugfal'`      | Returned value                   |
| `Paramet()`     | Calls the function               |
| `console.log()` | Prints the output                |
