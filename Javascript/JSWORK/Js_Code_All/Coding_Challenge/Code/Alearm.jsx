

// setInterval(function() {
//     const times = new Date();
//     const hours24 = times.getHours(); // 24-hour format
//     const minutes = times.getMinutes();
//     const seconds = times.getSeconds();
    
//     // Convert hours to 12-hour format
//     const ampm = hours24 >= 12 ? 'PM' : 'AM';
//     const hours12 = (hours24 % 12) || 12; // Handle midnight (0) as 12

//     const alltime = `${hours12} hours ${minutes} minutes ${seconds} seconds ${ampm}`;
    
//     console.log(alltime);
// }, 1000);



setInterval(function() {
    const times = new Date();
    const hours = times.getHours().toString().padStart(2, "0");
    const minutes = times.getMinutes().toString().padStart(2, "0");
    const seconds = times.getSeconds().toString().padStart(2, "0");
    
    const alltime = `${hours} hours ${minutes} minutes ${seconds} seconds`;
    
    console.log(alltime);
}, 1000);




let currentDate = new Date();
console.log(currentDate); // this current data-

setInterval(function() { 
    const times = new Date();
    const hours = times.getHours().toString().padStart(2, "0");
    const minutes = times.getMinutes().toString().padStart(2, "0");
    const seconds = times.getSeconds().toString().padStart(2, "0");
    
    const alltime = `${hours} hours ${minutes} minutes ${seconds} seconds`;
    
    console.log(alltime);
}, 1000);