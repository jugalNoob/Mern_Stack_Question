✅ 1. Basic callback example
function sayHello() {
    console.log("Hello!");
}

function greet(callback) {
    console.log("Start greeting...");
    callback(); // calling the callback
}

greet(sayHello);

Output:
Start greeting...
Hello!

✅ 2. Callback with parameters
function printMessage(message) {
    console.log("Message:", message);
}

function process(callback) {
    callback("This is a callback message!");
}

process(printMessage);

✅ 3. Inline callback (without separate function)
function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(10, 20, function(result) {
    console.log("Sum is:", result);
});

✅ 4. Callback used inside another function
function step1(callback) {
    console.log("Step 1 done");
    callback();
}

function step2() {
    console.log("Step 2 done");
}

step1(step2);

✅ 5. Multiple callbacks
function doTask(success, failure) {
    let ok = true;

    if (ok) success();
    else failure();
}

doTask(
    () => console.log("Task successful"),
    () => console.log("Task failed")
);


✅ 6. Custom Functions That Want Flexibility

You allow user to decide what will run at the end.

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(5, 10, function (res) {
    console.log("Sum =", res);
});