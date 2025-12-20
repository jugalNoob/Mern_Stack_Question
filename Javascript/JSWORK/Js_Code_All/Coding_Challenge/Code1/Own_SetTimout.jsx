/// Wait Time Out  --------------------->
function Set() {
   const delay = Date.now() + 5000; // 3-second delay
   // Busy-wait loop until the delay passes
   while (Date.now() < delay) {
      // Just waiting
      console.log('waiting room')
   }
   console.log("jugal sharma");
}

Set();


function Set(){

   setTimeout(()=>{
      console.log("jugal sharma")
   } , 3000)
}

Set()