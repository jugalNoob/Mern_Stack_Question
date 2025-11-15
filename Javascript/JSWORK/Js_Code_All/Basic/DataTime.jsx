🔹 1. Create Date Objects
// Current date & time
let now = new Date();
console.log(now);

// From timestamp (ms since Jan 1, 1970 UTC)
let fromTimestamp = new Date(1700000000000);

// From date string
let fromString = new Date("2025-09-03T10:30:00");

// From year, month (0-based), day, hours, minutes, seconds, ms
let custom = new Date(2025, 8, 3, 10, 30, 0);


🔹 2. Get Date & Time Components



let d = new Date();

console.log(d.getFullYear());   // 2025
console.log(d.getMonth());      // 8 (September → 0-based)
console.log(d.getDate());       // 3 (day of month)
console.log(d.getDay());        // 3 (Wednesday → 0 = Sunday)
console.log(d.getHours());      // 10
console.log(d.getMinutes());    // 30
console.log(d.getSeconds());    // 45
console.log(d.getMilliseconds());// 123
console.log(d.getTime());       // timestamp (ms since 1970)



🔹 3. Set Date & Time Components
let d = new Date();

d.setFullYear(2030);
d.setMonth(0);   // January
d.setDate(15);
d.setHours(8);
d.setMinutes(45);

console.log(d);



🔹 4. Formatting Dates
Default Formats
let d = new Date();

console.log(d.toString());     // Wed Sep 03 2025 10:30:00 GMT+0100
console.log(d.toDateString()); // Wed Sep 03 2025
console.log(d.toTimeString()); // 10:30:00 GMT+0100
console.log(d.toUTCString());  // Wed, 03 Sep 2025 09:30:00 GMT


ISO & Locale
console.log(d.toISOString());     // 2025-09-03T09:30:00.000Z
console.log(d.toLocaleDateString()); // 9/3/2025
console.log(d.toLocaleTimeString()); // 10:30:00 AM
console.log(d.toLocaleString());     // 9/3/2025, 10:30:00 AM



console.log(
  d.toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })
);
// Wednesday, September 3, 2025, 10:30 AM




🔹 5. Date Calculations
Difference Between Dates
let start = new Date("2025-01-01");
let end = new Date("2025-09-03");

let diffMs = end - start; // difference in milliseconds
let diffDays = diffMs / (1000 * 60 * 60 * 24);

console.log("Days between:", diffDays);



Add/Subtract Time
let d = new Date();

// Add 7 days
d.setDate(d.getDate() + 7);

// Subtract 2 hours
d.setHours(d.getHours() - 2);

console.log(d);


🔹 6. High-Resolution Time

For performance testing:

console.log(performance.now()); 
// Gives ms with decimals (more precise than Date.now)



🔹 7. Static Methods
console.log(Date.now()); // current timestamp in ms
console.log(Date.parse("2025-09-03")); // timestamp from string
console.log(Date.UTC(2025, 8, 3)); // timestamp in UTC





✅ Best Practices

Use Date.now() for timestamps (fastest).

Use ISO format (YYYY-MM-DD) for storing dates → avoids confusion with time zones.

For formatting & time zones in real apps, use libraries like dayjs, date-fns, or luxon (lighter than Moment.js).

Always remember months are 0-based.

Be careful with time zones → toISOString() always gives UTC.


