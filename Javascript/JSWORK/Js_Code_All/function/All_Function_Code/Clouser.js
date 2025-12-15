function Outer(){

    let io='jugal sharma'

    function Inners(){

        // let x=45
        console.log(io , 'one')
    }

    function Inner(){
        
        console.log(io , 'two') // this is a lecixal scope because innder function call out var

        // console.warn(x)
    }

    Inners()
    Inner()

}

Outer()


5️⃣ Key Takeaways

Lexical scope: Functions can access variables from parent scopes.

Closure: Functions remember the environment they were created in.

Local variables: Only visible inside the function they are declared.

Practical use: Useful for data encapsulation, private variables, callback functions, etc.



/// ---------------->?> Closure Important ------------------->>

function Outer() {
    let x = 0;  // x is created **fresh** every time Outer() is called
    function Inner() {
        x++;
        console.log(x);
    }
    Inner();  // call Inner once
}

Outer(); // 1
Outer(); // 1
Outer(); // 1






 function Outer() {
    let x = 0; // this variable is created once when Outer() is called
    return function () {
        x++;           // inner function uses and updates x
        console.log(x);
    }
}

let clickout = Outer(); // Outer() runs once → returns inner function
clickout();             // 1
clickout();             // 2
clickout();             // 3


Step-by-Step Execution

Outer() is called → x is initialized to 0.

Outer() returns the inner function, which remembers x because of closure.

clickout() is called first time:

x++ → x = 1

Prints 1

clickout() is called second time:

x++ → x = 2 (persistent from closure)

Prints 2

clickout() is called third time:

x++ → x = 3

Prints 3


✅ Takeaway

Closure lets a function remember variables from its outer scope even after the outer function finishes.