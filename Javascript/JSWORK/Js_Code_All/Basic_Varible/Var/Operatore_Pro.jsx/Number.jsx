1️⃣ What is Number()?

Number() is a type conversion function

Converts a value to a numeric type

| Input       | Result                                |
| ----------- | ------------------------------------- |
| Number      | Returns same number                   |
| String      | Converts if possible, else NaN        |
| Boolean     | `true → 1`, `false → 0`               |
| `null`      | 0                                     |
| `undefined` | NaN                                   |
| Object      | Depends on `valueOf()` / `toString()` |



Number(null);       // 0
Number(true);       // 1
Number(false);      // 0
Number("123");      // 123
Number("abc");      // NaN
Number({});         // NaN
Number([]);         // 0
Number([5]);        // 5


4️⃣ Interview Tip

undefined → Number = NaN

null → Number = 0 ✅ (easy trap)

Always remember: undefined is different from null in type conversion