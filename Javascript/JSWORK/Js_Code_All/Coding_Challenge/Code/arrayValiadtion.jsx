let data = [-1 , -2 ,10, 20, 30, 40 , 'jugal sharma'];

console.log(Array.isArray(data));  // ✅ true
console.log(data);                 // [ 10, 20, 30, 40 ]


if (data === undefined || !Array.isArray(data)) {
    console.log('data is invalid');
}



let allNumbers = data.every(item => typeof item === "number");

if (allNumbers) {
    console.log("✅ All elements are numbers");
} else {
    console.log("❌ Not all elements are numbers");
}

if (data.length === 0) {
    console.log('empty array');
}else{
    console.log('array is not emaply')
}

for(let i=0; i<data.length; i++){ // remove negivate value 
    if(data[i]>0){
        console.log(data[i])
    }
        
}


let data = ['jugal'];

function Hostings() {

  // ADVANCED VALIDATIONS
  if (
    Array.isArray(data) &&                     // must be array
    data instanceof Array &&                   // same check, extra safety if cross-frame
    typeof data === "object" &&                // arrays are objects
    data.length > 0 &&                         // cannot be empty
    data.every(item => typeof item === "string") &&  // validate type inside array
    !data.some(item => item === null || item === undefined || Number.isNaN(item)) // check invalid values
  ) {
    console.log(data, "i am array");
  } else {
    console.log("check your array");
  }
}

Hostings();
