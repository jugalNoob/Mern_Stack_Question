✅ 3. Exporting Classes (real-world)
main.js
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

app.js
import { User } from './main.js';

const user1 = new User('Jugal', 23);
console.log(user1.intro()); // Hi, I'm Jugal and I'm 23 years old.



/// --->>Simple function in es6 

export function User(a, b) {
  return a + b
}

export function NamesS(name){

    return name
}


 export default function greet() { //✅ 2. Default +
  return 'Welcome to Node.js ES Modules!';
}


import  greet,  { User , NamesS }  from  './main.js'

 console.log(User(5,4))
 console.log(NamesS('jugal sharma'))
console.log(greet()) 



🧩 LEVEL 5 – Asynchronous Exports (Async functions)
📄 services/api.js
export async function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Karan', age: 25, city: 'Delhi' });
    }, 1000);
  });
}

📄 app.js
import { getUserData } from './services/api.js';

const data = await getUserData();
console.log('Fetched User:', data);


✅ Concept Used: Top-level await works automatically in ES Modules —
— very professional!



⚙️ LEVEL 7 – Dynamic Import (Lazy Loading)
📄 app.js
if (process.env.NODE_ENV === 'dev') {
  const { logInfo } = await import('./services/logger.js');
  logInfo('Loaded logger dynamically!');
}


✅ Useful for large projects to load modules only when needed.