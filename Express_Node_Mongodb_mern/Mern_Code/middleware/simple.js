let counter = 1;

export function ClickButton(req, res, next) {
    console.log("Counter:", counter++);
    next();
}