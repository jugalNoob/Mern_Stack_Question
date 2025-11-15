✅ Summary of screen Properties


| Property        | Description                              |
| --------------- | ---------------------------------------- |
| `screen.width`  | Full screen width (px)                   |
| `screen.height` | Full screen height (px)                  |
| `availWidth`    | Usable width (excludes taskbar)          |
| `availHeight`   | Usable height                            |
| `colorDepth`    | Bits per pixel (24/32)                   |
| `pixelDepth`    | Pixel depth (usually same as colorDepth) |
| `orientation`   | Screen orientation info                  |
| `screenX / Y`   | Position of window relative to screen    |




Perfect 👍 Now let’s cover JavaScript screen object.

The screen object contains information about the user’s screen/monitor.
It’s available as window.screen (but we usually just use screen).

🖥️ JavaScript screen Object
🔹 1. Screen Dimensions
console.log("Full Width:", screen.width);     // e.g., 1920
console.log("Full Height:", screen.height);   // e.g., 1080


👉 Returns the total width & height of the screen.

🔹 2. Available Screen Space (excluding taskbar/dock)
console.log("Available Width:", screen.availWidth);
console.log("Available Height:", screen.availHeight);


👉 Excludes OS taskbars (Windows taskbar, Mac dock, etc.).

🔹 3. Color & Pixel Depth
console.log("Color Depth:", screen.colorDepth); // Usually 24 or 32
console.log("Pixel Depth:", screen.pixelDepth); // Usually same as colorDepth


👉 Number of bits per pixel (used for display capabilities).

🔹 4. Window Position on Screen
console.log("X:", window.screenX); // Distance from left edge of screen
console.log("Y:", window.screenY); // Distance from top edge of screen

🔹 5. Window Size vs Screen Size
console.log("Inner Width:", window.innerWidth);   // Width of viewport
console.log("Inner Height:", window.innerHeight); // Height of viewport

console.log("Outer Width:", window.outerWidth);   // Window including toolbars
console.log("Outer Height:", window.outerHeight);

🔹 6. Orientation API (Mobile/Tablets)
console.log("Orientation:", screen.orientation.type); // e.g., "landscape-primary"

screen.orientation.addEventListener("change", () => {
  console.log("Orientation changed to:", screen.orientation.type);
});


👉 Useful for responsive mobile apps (portrait ↔ landscape).