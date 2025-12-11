| Feature               | Node.js      | Browser |
| --------------------- | ------------ | ------- |
| url.search            | ✔            | ✔       |
| url.searchParams      | ✔            | ✔       |
| url.username          | ✔            | ✔       |
| url.toString()        | ✔            | ✔       |
| url.toJSON()          | ✔            | ✔       |
| URL.canParse()        | ✔ (Node 20+) | ✔       |
| URL.parse()           | ⚠ partially  | ✔       |
| URL.createObjectURL() | ❌            | ✔       |
| URL.revokeObjectURL() | ❌            | ✔       |

✅ 1. url.search

Returns the query string beginning with "?".

const url = new URL("https://example.com/page?name=jugal&age=20");

console.log(url.search);  
// "?name=jugal&age=20"

✅ 2. url.searchParams

Returns a URLSearchParams object used to get, set, delete query params.

const url = new URL("https://example.com/page?name=jugal");

console.log(url.searchParams.get("name"));  // "jugal"

url.searchParams.append("age", "20");
console.log(url.toString());
// https://example.com/page?name=jugal&age=20

✅ 3. url.username

Extracts the username from the URL.

const url = new URL("https://user123:pass123@example.com");

console.log(url.username);  
// "user123"

✅ 4. url.toString()

Returns the full URL as a string.

const url = new URL("https://example.com/path");

console.log(url.toString());
// "https://example.com/path"

✅ 5. url.toJSON()

Same as toString(), used in JSON.

const url = new URL("https://example.com");

console.log(url.toJSON());
// "https://example.com"

⚠ IMPORTANT

The methods below are NOT Node.js URL API — these are Browser APIs for Blob URLs.

🌐 Browser Only (Not Node.js)
❌ Not available in Node.js:

URL.createObjectURL(blob)

URL.revokeObjectURL(id)

But here is what they do:

✅ 6. URL.createObjectURL(blob)

Creates a temporary URL for files (images, videos, pdfs…).

const blob = new Blob(["Hello World"], { type: "text/plain" });
const id = URL.createObjectURL(blob);

console.log(id);
// blob:http://localhost/7ac1c283-52c9-4fbd-9d51

✅ 7. URL.revokeObjectURL(id)

Deletes the temporary Blob URL.

URL.revokeObjectURL(id);

⚠ Now the confusing part:
8. URL.canParse()

✔ Exists in Browser
✔ Exists in Node.js (v20+)
Checks if a URL is valid.

console.log(URL.canParse("https://google.com")); // true
console.log(URL.canParse("jugal??"));            // false

⚠ 9. URL.parse(input[, base])

✔ Exists in Browser
❌ NOT recommended in Node.js
It returns a parsed URL object (WHATWG spec).

const url = URL.parse("https://example.com");
console.log(url.hostname);
// "example.com"


But in Node.js, better to use:

new URL("https://example.com")



const myUrl = new URL("https://example.com");

myUrl.searchParams.append("name", "jugal");
myUrl.searchParams.append("age", "21");

console.log(myUrl.toString());

const params = new URLSearchParams();
params.append('foo', 'bar');
params.append('foo', 'baz');
params.append('abc', 'def');
console.log(params.toString());
// Prints foo=bar&foo=baz&abc=def

params.set('foo', 'def');
params.set('xyz', 'opq');
console.log(params.toString());
// Prints foo=def&abc=def&xyz=opq 


// ------>>urlSearchParams.sort()
const params = new URLSearchParams('query[]=abc&type=search&query[]=123');
params.sort();
console.log(params.toString());