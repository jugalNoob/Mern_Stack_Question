Here's a breakdown of character classes in regular expressions:

[abc]: Matches any of the characters a, b, or c.
[A-Z]: Matches any uppercase character from A to Z.
[a-z]: Matches any lowercase character from a to z.
[A-z]: Matches any character from uppercase A to lowercase z, 
but be cautious! This range also includes some non-alphabet 
characters between Z and a (e.g., \, ], ^, _), so it's 
generally better to specify [A-Za-z] if you only want alphabetic
 characters.



 The [0-9] expression is used to find any character between the brackets.

The digits inside the brackets can be any numbers or span of numbers from 0 to 9.

Tip: Use the [^0-9] expression to find any character that is NOT a digit.



The (x|y) expression is used to find any of the alternatives specified.
