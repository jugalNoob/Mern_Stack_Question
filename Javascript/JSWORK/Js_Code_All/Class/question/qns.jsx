10) Common pitfalls (short checklist)

Replacing a method with a string or value (breaks behavior).

Forgetting new for constructor functions.

Using arrow functions for prototype methods that use this (arrow this is lexical).

Accessing private fields (#name) from outside → SyntaxError.

Mutating shared objects unintentionally (use Object.freeze or immutability patterns).

Relying on method overloading — JS uses flexible args instead.

11) Short quiz (8 quick checks)

What happens if you call a constructor function without new and it doesn't guard for it?

Why would you use a get accessor instead of a method getName()?

How do you emulate private data in older JS (pre-# syntax)?

How to prevent an object being extended/modified?

What is the difference between static methods and instance methods?

Give a short code example of composition (not inheritance).

Explain why myObj.method = "something" is usually a bug.

How to emulate method overloading in JS?

(Use these to test yourself — I can grade your answers if you want.)

12) Next steps — what I can add for you (pick any):

Convert these examples to TypeScript with interfaces/types.

Write unit tests (Jest) for the classes.

Build a small example app demonstrating composition + inheritance.

Make a concise cheatsheet PDF of the final corrected examples.

Create flashcards (Q/A) from the quiz.

I won’t ask which — just tell me which one you want next (or I can start with TypeScript conversion for all snippets).