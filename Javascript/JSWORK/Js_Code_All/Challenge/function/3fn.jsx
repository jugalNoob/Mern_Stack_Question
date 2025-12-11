function nameIm(){
    return 'jugal'
}
let val=nameIm()
console.log(typeof(val))
console.log(typeof(''))
console.log(val === 'jugal')
console.log(val == '')

🧠 Step 1: What does nameIm() return?
return ''
👉 It returns an empty string.
So:
val = ''
🧠 Step 2: What is an empty string?
An empty string is still a string:
Type → string
Value → ""
✅ Now check both comparisons
We will understand WHY and HOW JavaScript evaluates them.
🔥 1) val === '' (STRICT equality)
Strict equality checks 3 things:
✔ Same Type?
val → string
'' → string
➡ Yes
✔ Same Value?
val → ""
'' → ""
➡ Yes
✔ No type conversion done
Because types already match.
So:
val === ''  → true
🔥 2) val == '' (LOOSE equality)
Loose equality (==) performs type coercion only if types differ.
But here:
val is a string
'' is a string
📌 Types are already same → No coercion required
So JS compares values directly:
'' == ''  → true
⚙️ How JavaScript Engine Works Internally
For === (strict)
Checks type first
If type matches, checks value
No conversions
For == (loose)
First: checks if types same
If same → acts like ===
If different → converts one value and compares
(NOT NEEDED HERE)
🎯 Final Output
true
true
🧠 Why both are true?
Because:
✔ Same type (string)
✔ Same value ("")
✔ Loose equality does NOT coerce when types match
So both become true.