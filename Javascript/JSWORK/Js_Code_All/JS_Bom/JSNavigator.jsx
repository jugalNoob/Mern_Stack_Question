✅ Summary (Most Useful navigator APIs)

| Feature            | API Example                                               |
| ------------------ | --------------------------------------------------------- |
| Browser info       | `navigator.userAgent`, `navigator.language`               |
| Network            | `navigator.onLine`, `online/offline` events               |
| Geolocation        | `navigator.geolocation.getCurrentPosition()`              |
| Media (camera/mic) | `navigator.mediaDevices.getUserMedia()`                   |
| Clipboard          | `navigator.clipboard.writeText()`                         |
| Battery (optional) | `navigator.getBattery()`                                  |
| Device info        | `navigator.deviceMemory`, `navigator.hardwareConcurrency` |
| PWA support        | `navigator.serviceWorker`                                 |
| Mobile vibration   | `navigator.vibrate()`                                     |



It’s part of the Window API and is available as window.navigator (but usually we just use navigator).

🌍 JavaScript navigator Object
🔹 1. Basic Browser Information
console.log(navigator.appName);      // "Netscape" (legacy)
console.log(navigator.appVersion);   // Full browser version string
console.log(navigator.userAgent);    // User agent string
console.log(navigator.platform);     // OS info (e.g., "Win32", "Linux x86_64")
console.log(navigator.language);     // Default language (e.g., "en-US")
console.log(navigator.languages);    // Array of preferred languages


✅ userAgent is often used for browser/device detection, but better use feature detection instead of UA sniffing.

🔹 2. Online / Offline Detection
console.log(navigator.onLine); // true (if connected to network)

window.addEventListener("online", () => console.log("You are online"));
window.addEventListener("offline", () => console.log("You are offline"));

🔹 3. Geolocation API

Get user’s location (with permission).

navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log("Latitude:", pos.coords.latitude);
    console.log("Longitude:", pos.coords.longitude);
  },
  (err) => {
    console.error("Error:", err.message);
  }
);


✅ Used in maps, weather apps, ride-sharing apps.

🔹 4. Media Devices (Camera & Mic)
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    console.log("Got camera/mic access:", stream);
  })
  .catch(err => {
    console.error("Access denied:", err.message);
  });


✅ Used in video calls, screen recording, conferencing apps.

🔹 5. Clipboard API
navigator.clipboard.writeText("Hello from JS!")
  .then(() => console.log("Copied!"))
  .catch(err => console.error("Copy failed:", err));

navigator.clipboard.readText()
  .then(text => console.log("Pasted:", text));

🔹 6. Battery API (Experimental, not in all browsers)
navigator.getBattery().then(battery => {
  console.log("Battery level:", battery.level * 100 + "%");
  console.log("Charging:", battery.charging);
});

🔹 7. Device Memory (Experimental)
console.log(navigator.deviceMemory); // e.g., 8 (GB of RAM)

🔹 8. Service Worker Support
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("Service Worker registered"));
}


✅ Used in Progressive Web Apps (PWA).

🔹 9. Vibration API (Mobile Only)
navigator.vibrate([200, 100, 200]); // Vibrate pattern

🔹 10. Hardware Concurrency
console.log(navigator.hardwareConcurrency); // Number of CPU cores