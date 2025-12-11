1️⃣ Using new Date() (Date object)

Creates a Date object representing current date and time.

Provides lots of methods to extract parts.

let now = new Date();
console.log(now);                // full date-time
console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 0-11
console.log(now.getDate());      // day of month
console.log(now.getDay());       // day of week 0-6
console.log(now.getHours());     // hours 0-23
console.log(now.getMinutes());   // minutes 0-59
console.log(now.getSeconds());   // seconds 0-59
console.log(now.getMilliseconds());// 0-999


✅ Most common way.

2️⃣ Using Date.now()

Returns current time in milliseconds since Jan 1, 1970 UTC.

Useful for timestamps and time calculations.

let timestamp = Date.now();
console.log(timestamp);  // e.g., 1739154930123

3️⃣ Using Date.UTC()

Returns milliseconds since Jan 1, 1970 UTC for a specific date.

Month is 0-indexed (Jan=0).

let utc = Date.UTC(2025, 11, 10, 0, 0, 0); // Dec 10, 2025
console.log(utc); // milliseconds

4️⃣ Using toISOString()

Converts a Date object to ISO 8601 string (UTC).

let now = new Date();
console.log(now.toISOString()); // "2025-12-10T02:15:30.123Z"

5️⃣ Using toLocaleString() / toLocaleDateString() / toLocaleTimeString()

Converts Date object to human-readable string based on locale.

let now = new Date();
console.log(now.toLocaleString());      // "12/10/2025, 7:45:30 AM"
console.log(now.toLocaleDateString());  // "12/10/2025"
console.log(now.toLocaleTimeString());  // "7:45:30 AM"

6️⃣ Using getTime()

Returns milliseconds since Jan 1, 1970 from a Date object.

let now = new Date();
console.log(now.getTime());  // same as Date.now()

7️⃣ Using performance timing (high-precision, optional)

For measuring time intervals (not date/time directly).

console.log(performance.now()); // milliseconds since page load
⚡ Summary

new Date() → object with current date/time

Date.now() → milliseconds from 1970 → now


There are essentially 2 main categories:

Date object methods → new Date() + getFullYear(), getHours(), etc.

Timestamps (numbers) → Date.now(), Date.UTC(), getTime()

| Method                      | Returns Type | Usage                          |
| --------------------------- | ------------ | ------------------------------ |
| `new Date()`                | Date object  | Full current date/time         |
| `Date.now()`                | Number       | Current timestamp (ms)         |
| `Date.UTC(year, ...)`       | Number       | Timestamp of specific UTC date |
| `date.toISOString()`        | String       | ISO formatted string           |
| `date.toLocaleString()`     | String       | Human-readable date/time       |
| `date.toLocaleDateString()` | String       | Human-readable date only       |
| `date.toLocaleTimeString()` | String       | Human-readable time only       |
| `date.getTime()`            | Number       | Timestamp (ms) from Date       |




