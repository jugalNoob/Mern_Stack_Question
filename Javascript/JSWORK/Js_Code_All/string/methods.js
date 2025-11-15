| Method                                      | Description                                   | Example                                         | Output             |
| ------------------------------------------- | --------------------------------------------- | ----------------------------------------------- | ------------------ |
| `includes()`                                | Checks if substring exists (boolean)          | `'hello'.includes('e')`                         | true               |
| `indexOf()`                                 | Returns first index of substring              | `'hello'.indexOf('l')`                          | 2                  |
| `lastIndexOf()`                             | Returns last index of substring               | `'hello'.lastIndexOf('l')`                      | 3                  |
| `search()`                                  | Searches using regex or string, returns index | `'hello'.search('l')`                           | 2                  |
| `charAt()`                                  | Returns character at index                    | `'hello'.charAt(1)`                             | 'e'                |
| `at()`                                      | Returns character at index, supports negative | `'hello'.at(-1)`                                | 'o'                |
| `charCodeAt()`                              | Returns Unicode of character at index         | `'A'.charCodeAt(0)`                             | 65                 |
| `toUpperCase()`                             | Converts string to uppercase                  | `'hello'.toUpperCase()`                         | 'HELLO'            |
| `toLowerCase()`                             | Converts string to lowercase                  | `'HELLO'.toLowerCase()`                         | 'hello'            |
| `slice()`                                   | Extracts substring, supports negative index   | `'hello'.slice(1,4)`                            | 'ell'              |
| `substring()`                               | Extracts substring, ignores negative index    | `'hello'.substring(1,4)`                        | 'ell'              |
| `substr()` *(deprecated)*                   | Extracts substring with start and length      | `'hello'.substr(1,3)`                           | 'ell'              |
| `trim()`                                    | Removes whitespace from both ends             | `' hello '.trim()`                              | 'hello'            |
| `trimStart()`                               | Removes whitespace from start                 | `' hello '.trimStart()`                         | 'hello '           |
| `trimEnd()`                                 | Removes whitespace from end                   | `' hello '.trimEnd()`                           | ' hello'           |
| `replace()`                                 | Replaces **first occurrence**                 | `'hello world'.replace('l','L')`                | 'heLlo world'      |
| `replaceAll()`                              | Replaces **all occurrences**                  | `'hello world'.replaceAll('l','L')`             | 'heLLo worLd'      |
| `split()`                                   | Converts string to array based on separator   | `'a,b,c'.split(',')`                            | ['a','b','c']      |
| `concat()`                                  | Concatenates strings                          | `'Hello'.concat(' ','World')`                   | 'Hello World'      |
| `startsWith()`                              | Checks if string starts with substring        | `'hello'.startsWith('he')`                      | true               |
| `endsWith()`                                | Checks if string ends with substring          | `'hello'.endsWith('lo')`                        | true               |
| `repeat()`                                  | Repeats string `n` times                      | `'ha'.repeat(3)`                                | 'hahaha'           |
| `padStart()`                                | Pads string at start to given length          | `'5'.padStart(3,'0')`                           | '005'              |
| `padEnd()`                                  | Pads string at end to given length            | `'5'.padEnd(3,'0')`                             | '500'              |
| `localeCompare()`                           | Compares two strings                          | `'a'.localeCompare('b')`                        | -1                 |
| `codePointAt()`                             | Returns Unicode code point at index           | `'😊'.codePointAt(0)`                           | 128522             |
| `match()`                                   | Returns regex matches as array                | `'abc123'.match(/\d+/)`                         | ['123']            |
| `matchAll()`                                | Returns **all regex matches** iterator        | `[... 'abc123xyz456'.matchAll(/\d+/g)]`         | [['123'], ['456']] |
| `includes()`                                | Boolean search                                | `'hello'.includes('ll')`                        | true               |
| `toReversed()` *(ES2023)*                   | Returns **new reversed string**               | `'abc'.split('').toReversed().join('')`         | 'cba'              |
| `toSorted()` *(ES2023 for arrays of chars)* | Returns **sorted string**                     | `'bac'.split('').toSorted().join('')`           | 'abc'              |
| `toSpliced()` *(ES2023 for array of chars)* | Immutable splice                              | `'hello'.split('').toSpliced(1,2,'a').join('')` | 'halo'             |
| `with()` *(ES2023 for array of chars)*      | Immutable replacement                         | `'hello'.split('').with(1,'a').join('')`        | 'hallo'            |

let str='sharma jugal'

1️⃣ includes()

Checks if a substring exists.

Returns: true / false (boolean)

str.includes('4'); // false

2️⃣ search()

Searches for a substring (or regex).

Returns: index of first match or -1

str.search('5'); // -1

3️⃣ toLowerCase()

Converts string to lowercase

str.toLowerCase(); // "sharma jugal"

4️⃣ toUpperCase()

Converts string to uppercase

str.toUpperCase(); // "SHARMA JUGAL"

5️⃣ at()

Access character at a position (supports negative index)

str.at(1);  // "h"

6️⃣ slice(start, end)

Extracts a substring without modifying original string

Supports negative index from end

str.slice(0, -3); // "sharma ju"

7️⃣ length

Returns the number of characters in string

str.length; // 12

8️⃣ charCodeAt(index)

Returns Unicode value of character at index

Default index = 0

str.charCodeAt(); // 115 → 's'

9️⃣ substring(start, end)

Extracts substring like slice, but does NOT support negative index

str.substring(0, -3); // "" → negative ignored

10️⃣ lastIndexOf(searchValue)

Returns last index of substring

str.lastIndexOf(''); // 12 → empty string returns string length

11️⃣ trimStart()

Removes whitespace from start

str.trimStart(); // "sharma jugal" (no leading spaces here)

12️⃣ replace()

Replaces first occurrence of substring

str.replace('jugal', 'Ylioo'); // "sharma Ylioo"

13️⃣ replaceAll()

Replaces all occurrences of substring

str.replaceAll('jugal', 'Karan'); // "sharma Karan"