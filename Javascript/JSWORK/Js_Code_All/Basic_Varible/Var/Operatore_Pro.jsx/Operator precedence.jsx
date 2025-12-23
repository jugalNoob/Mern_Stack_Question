Operator precedence decides which operator is 
executed first when multiple operators appear in one expression.

If precedence is equal → associativity 
decides (left → right or right → left).


()   // always highest
* / %
+ -
< > <= >=
== != === !==
&&
||
=



📊 IMPORTANT OPERATOR PRECEDENCE (Most Used)
🔥 Highest → Lowest (Practical Order)




| Priority | Operator        | Example         |   |       |   |        |
| -------- | --------------- | --------------- | - | ----- | - | ------ |
| 1        | `()`            | `(2 + 3) * 4`   |   |       |   |        |
| 2        | `++ --`         | `i++`, `++i`    |   |       |   |        |
| 3        | `!`             | `!true`         |   |       |   |        |
| 4        | `* / %`         | `2 * 3`         |   |       |   |        |
| 5        | `+ -`           | `2 + 3`         |   |       |   |        |
| 6        | `< <= > >=`     | `2 < 3`         |   |       |   |        |
| 7        | `== != === !==` | `2 == '2'`      |   |       |   |        |
| 8        | `&&`            | `true && false` |   |       |   |        |
| 9        | `               |                 | ` | `true |   | false` |
| 10       | `?:`            | `a ? b : c`     |   |       |   |        |
| 11       | `=`             | `x = 5`         |   |       |   |        |




🎯 Interview One-Liner (MEMORIZE)

JavaScript evaluates expressions based on 
operator precedence first, and associativity
 only applies when precedence levels are equal.
  Parentheses always win.

