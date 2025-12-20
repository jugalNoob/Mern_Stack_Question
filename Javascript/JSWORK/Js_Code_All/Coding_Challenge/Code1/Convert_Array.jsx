// Digitize Number to array .................................::::::::::::::::::::::::
const convertToArray = (number) => {
   return [...`${number}`].map(el => parseInt(el));
 };
 
 // Example usage
 const number = 12345;
 const digitArray = convertToArray(number);
 console.log(digitArray); // Output: [1, 2, 3, 4, 5]