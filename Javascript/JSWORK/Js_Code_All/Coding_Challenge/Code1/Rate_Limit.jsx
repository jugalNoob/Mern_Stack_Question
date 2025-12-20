let count = 0;

const ratelimit = () => {
  if (count > 5)
    setTimeout(() => {
      count++;
    }, 5000);
};



let count = 0;
const MAX_ACTIONS = 5;
const WINDOW = 5000; // 5 seconds

const rateLimit = () => {
  if (count >= MAX_ACTIONS) {
    console.log("Rate limit reached! Wait...");
    return;
  }

  count++;
  console.log("Action allowed ✅ | count:", count);

  // Reset count after WINDOW
  setTimeout(() => {
    count--;
    console.log("Window reset | count:", count);
  }, WINDOW);
};

// Simulate actions
setInterval(rateLimit, 1000); // try every 1 second



How this works:

count = current tokens in the bucket.

MAX_TOKENS = max tokens the bucket can hold.

setInterval refills 1 token every REFILL_TIME ms.

rateLimit() consumes 1 token per action; if no tokens are left, action is blocked.