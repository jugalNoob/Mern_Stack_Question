
let x = 0;
let intervalId;

function startInterval() {
  intervalId = setInterval(() => {
    console.log(x); // Log the current value of x
    x++; // Increment x

    // Conditional logic and wait 5s
    if (x > 5) {
      console.log("take 5s");
      clearInterval(intervalId); // Stop the interval

      setTimeout(() => {
        x = 0; // Reset x to 0 after 5 seconds
        startInterval(); // Restart the interval

        console.log("take 5s to restart interval")
      }, 5000);
    }
  }, 2000); // Runs every 2000 milliseconds (2 seconds)
}

startInterval(); // Start the interval initially





::::::::::: /// Important run logic 

let x = 0;

setInterval(() => {
  console.log(x); // Log the current value of x
  x++; // Increment x

  // Conditional logic
  if (x > 5) {
    x = 0; // Reset x to 0 if it exceeds 5
  }
}, 2000); // Runs every 2000 milliseconds (2 seconds)




/// get code time start end   ------------------->>>

const startTime = performance.now();
console.log(Math.random().toString().length)
console.log(Math.random()<0.5)
const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(coinFlip);

      const endTime = performance.now();


function getRandomDate(start, end) {
   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}







// Coin FLip Game start   ----------------------------------?>>>>>>>>>>>>>>

let clickCount = 0;
const maxClicks = 5;
let one=0
let two=0;
function flipButton() {
    if (clickCount < maxClicks) {
        clickCount++;
        const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
        console.log(coinFlip);
        if (coinFlip === 'Heads') {
         
            console.log(coinFlip + " you win ");
            console.log(one++)
        } else {
            console.log(coinFlip + " you lose ");
            console.log(two++)
        }
    } else {
        console.log("No more flips allowed, you've reached the limit of 10.");

        console.log(one > two ? "You wine as a head" : "You  lose as a tail" )
    }


}
flipButton()



:::::::::::::::::::::::::::::::::::::::::::::::


 ::: Without click random coin Flip ;;;  --------------------------------
const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(coinFlip)
if(coinFlip === 'Heads'){
   console.log(coinFlip + " you win ")
}else{
   console.log(coinFlip + " you loose ")
}