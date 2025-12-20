::::: random wordlist create Important :::::::::::::::
let word = "jugalsharmajammu";
let wordlistLength = 10; // Length of the random wordlist you want to generate
let randomWordlist = "";

// Loop to create a random wordlist of the desired length
for (let i = 0; i < wordlistLength; i++) {
  let randomIndex = Math.floor(Math.random() * word.length);
  randomWordlist += word[randomIndex];
}

console.log("Random Wordlist:", randomWordlist);
