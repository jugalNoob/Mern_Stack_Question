✅ Summary Table

| Popup     | Description          | Buttons     | Return Value             |
| --------- | -------------------- | ----------- | ------------------------ |
| `alert`   | Show message         | OK          | Nothing                  |
| `confirm` | Ask for confirmation | OK / Cancel | `true` or `false`        |
| `prompt`  | Ask for input        | OK / Cancel | String (input) or `null` |


Got it 👍 Let’s talk about JavaScript Popup Alerts.
JavaScript provides 3 types of popup boxes:

🔔 JavaScript Popup Boxes
🔹 1. Alert Box

👉 Used to display a simple message to the user.
It only has an OK button.

alert("Hello! This is an alert box.");


✅ Example use: Show warnings, success messages, or simple notifications.

🔹 2. Confirm Box

👉 Used when you need the user to confirm or cancel an action.
It has OK and Cancel buttons.
Returns:

true → if user clicks OK

false → if user clicks Cancel

let result = confirm("Are you sure you want to delete?");
if (result) {
  console.log("User pressed OK");
} else {
  console.log("User pressed Cancel");
}


✅ Example use: Delete confirmation, exit prompt.

🔹 3. Prompt Box

👉 Used to get input from the user.
It has a text field and returns:

The entered value

null if user presses Cancel

let name = prompt("Please enter your name:", "Guest");
if (name === null || name === "") {
  console.log("User cancelled or entered nothing.");
} else {
  console.log("Hello " + name + "!");
}


✅ Example use: Ask user for username, age, feedback.