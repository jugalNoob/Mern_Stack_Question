Sure! Here’s a clean list of JavaScript questions with answers, ready for quick revision:

1. What is JavaScript and its benefits?

Answer: JavaScript is a high-level, interpreted programming language for web development. Benefits: runs in all browsers, enables dynamic content, supports object-oriented and functional programming, usable for frontend and backend, has a large ecosystem.

2. Difference between == and ===

Answer: == compares values after type coercion (loose equality). === compares value and type (strict equality).

3. Difference between null and undefined

Answer: null is intentional absence of value. undefined means a variable is declared but not assigned.

4. What are JavaScript Design Patterns?

Answer: Reusable solutions for common problems. Examples: Singleton, Module, Observer.

5. What is Hoisting?

Answer: Variables and functions are moved to the top of their scope before execution. var is hoisted (undefined), let/const are not.

6. What is isNaN()?

Answer: Checks if a value is Not-a-Number.

7. What is typeof?

Answer: Returns the data type of a variable or value.

8. What is BOM (Browser Object Model)?

Answer: Objects provided by the browser like window, navigator, location, history.

9. Difference between Callback, Promise, and Async/Await

Answer: Callback: function passed to execute later.
Promise: handles async operations (resolve/reject).
Async/Await: syntactic sugar over Promises for cleaner code.

10. What is a Closure?

Answer: A function that remembers variables from its outer scope even after the outer function has executed.

11. How does JavaScript work?

Answer: JS is parsed by engine → creates execution context → runs line by line → async operations handled via event loop.

12. Difference between function and const function

Answer: function can be hoisted. const function cannot be hoisted; stored in variable.

13. What is return?

Answer: Returns a value from a function to the caller.

14. What is DOM (Document Object Model)?

Answer: Represents HTML document as objects that can be manipulated via JS.

15. What is fetch() and why use it?

Answer: Makes HTTP requests to APIs and returns Promises for handling responses asynchronously.

16. What is a Promise and why use it?

Answer: Represents a future value of an async operation, helps avoid callback hell.

17. What is an Array?

Answer: Ordered collection of items.

map() → returns a new array.

forEach() → iterates, does not return.

filter() → array of elements matching condition.

find() → first matching element.

findIndex() → index of first matching element.

18. What is a String?

Answer: Sequence of characters. Can reverse using split("").reverse().join("").

19. Difference between some() and every()

Answer: some() → true if any element satisfies condition.
every() → true if all elements satisfy condition.

20. Difference between let, const, and var

Answer:

var → function-scoped, hoisted, redeclarable.

let → block-scoped, not hoisted, not redeclarable.

const → block-scoped, cannot be reassigned.

21. Event bubbling vs Event delegation

Answer:

Bubbling → event propagates from child → parent.

Delegation → parent handles events for child elements dynamically.

22. Difference between setTimeout and setInterval

Answer: setTimeout → executes once after delay. setInterval → executes repeatedly at intervals.

23. Shallow copy vs Deep copy

Answer:

Shallow copy → copies references, not nested objects.

Deep copy → copies nested objects fully (JSON or structuredClone).

24. Arrow functions vs Regular functions

Answer: Arrow functions do not have their own this, cannot be used as constructors. Regular functions do.

25. bind(), call(), apply()

Answer:

bind() → returns new function with this set.

call() → calls function immediately with this and arguments.

apply() → like call(), but arguments passed as array.


Difference between null, undefined, and NaN.
Answer:

null → intentional empty value.

undefined → declared but not assigned.

NaN → Not-a-Number, invalid numeric operation.



26. LocalStorage, SessionStorage, Cookies

Answer:

LocalStorage → persistent storage in browser.

SessionStorage → cleared when tab closes.

Cookies → small data sent with HTTP requests.

27. this keyword

Answer: Refers to context: global, object, class, or undefined in strict mode; behaves differently in arrow functions.

28. Synchronous vs Asynchronous

Answer:

Synchronous → code executes line by line.

Asynchronous → code executes independently (e.g., fetch, setTimeout).

29. Memory Management & Garbage Collection

Answer: JS automatically frees memory of unreferenced objects using garbage collector.

30. Spread operator and Rest parameter

Answer:

Spread (...arr) → expands array or object.

Rest (...args) → collects arguments into array.