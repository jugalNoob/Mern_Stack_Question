❌ This never happens with ==.
If it did, result would be true — but JS explicitly blocks this.



2. null == 0 (False)
As we touched on before, this is because of the Equality Algorithm rules.

The Rule: For ==, JavaScript does not convert null to a number.
 It only considers null equal to null or undefined.

The Comparison: It sees null on one side and 0 on the other.
 Since null is not allowed to be coerced into 0 during an equality
  check, the result is false.

The Logic Conflict
This is what makes JavaScript tricky:

Logic context: Boolean(null) is false.

Math context: null + 1 is 1 (treated as 0).

Equality context: null == 0 is false.



Expression,Step 1 (Evaluation),Result
null == 0,Rule: null only equals null/undefined,false
+null == 0,0 == 0 (Unary + forces number),true
Boolean(null),null is falsy,false


| Expression      | Step 1 (Evaluation Rule)                                    | Result  |
| --------------- | ----------------------------------------------------------- | ------- |
| `null == 0`     | Special equality rule (`null` only equals `null/undefined`) | `false` |
| `+null == 0`    | Unary `+` → `null → 0`                                      | `true`  |
| `Boolean(null)` | `null` is falsy                                             | `false` |




| Expression           | Result |
| -------------------- | ------ |
| `null == undefined`  | true   |
| `null == false`      | false  |
| `null == 0`          | false  |
| `null == ""`         | false  |
| `null === undefined` | false  |
console.log(null == null)
console.log(null === null)

Simple Answer (MEMORIZE THIS)

null only loosely equals undefined — nothing else.

That’s it. No boolean or number coercion happens with null.