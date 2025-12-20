
🎯 INTERVIEW ONE-LINER (GOLD)

Arrays stringify to empty strings, objects stringify to 
[object Object], and == compares objects by reference 
but primitives by value after coercion.

🎯 INTERVIEW ONE-LINER (GOLD)

Arrays stringify to empty strings, objects stringify to 
[object Object], and == compares objects by reference 
but primitives by value after coercion.


== triggers coercion if types differ.


| Expression          | Result | Why?                            |
| ------------------- | ------ | ------------------------------- |
| `0 == ''`           | true   | '' → 0                          |
| `0 == '0'`          | true   | '0' → 0                         |
| `false == ''`       | true   | '' → 0, false → 0               |
| `false == []`       | true   | [] → '', then '' → 0, false → 0 |
| `null == undefined` | true   | special JS rule                 |




3️⃣ String Coercion
When JS converts other types → string:

| Expression        | Result            | Explanation                            |
| ----------------- | ----------------- | -------------------------------------- |
| `'' + 5`          | "5"               | number → string                        |
| `'Hello ' + true` | "Hello true"      | boolean → string                       |
| `[] + {}`         | "[object Object]" | array → "", object → "[object Object]" |

