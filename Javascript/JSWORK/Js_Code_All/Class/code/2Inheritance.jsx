class SchoolMain {
  static MainSchoolOne = 'SchoolOfJugal';

  constructor(name, Total) {
    this.name = name;
    this.Total = Total;
    this.Main = SchoolMain.MainSchoolOne;
  }

  Main_School() {
    console.log(
      `School Name: ${this.name}, Total Schools: ${this.Total}, Main School: ${this.Main}`
    );
  }
}

class SecondSchool extends SchoolMain {

  constructor(name, Total, second) {
    super(name, Total);
    this.second = second;  // FIXED typo
  }

  Second_School() {

    // Call parent method (super keyword)
    super.Main_School();

    // Additional info from child
    console.log(`Second School Info: ${this.second}`);
  }
}

let main = new SchoolMain('Jugal Sharma', 100);
let second = new SecondSchool('Karan Sharma', 50, 'Nikhil');

// OUTPUT
main.Main_School();    // Prints Jugal
second.Main_School();  // Prints Karan
second.Second_School();  // Prints parent + child info


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::




class Pe {
  constructor(name) {
    this.names = name;
  }
}

class Veg extends Pe {
  constructor(name = "DefaultVeggieName") {
    super(name);
    console.log('Veg created:', name);
  }
}

const two = new Veg("jugal sharma");
console.log(two instanceof Veg, two instanceof Pe); // true true


//////////// ------------------------->>>> Seond Row classs ------------------------------->>



class Banker{

    static Bankname='BankOfJugalSharma' 
    constructor( names){
       this.names=names 
       this.Bankname=Banker.Bankname
    
    }

    Userbalance(){
        console.log('this is my parent balance' , this.names )
    }
}
console.log(Banker.prototype)



class IndianB extends Banker{
    Userbalance(){
        super.Userbalance()
        console.log('this child names' , this.names)
    }
}


function UserGet(){

    return `this is my name with function ${this.names}`
}




let info=new IndianB('jugal sghrama')
info.Userbalance()

console.log(UserGet.call(info));  //// call 
// "this is my name with function jugal"

console.log(info)




:::::::::::::::::::::::: Project Inheritance ::::::::::::::::::::::::



class Banker{
    // static Bankname='BankOfJugalSharma' 
    constructor( names,age,salary){
       this.names=names 
       this.age=age;
       this.salary=salary
    }
    Info(){
        console.log(`User nname ${this.names} Age user ${this.age} user salary${this.salary} `)
    }
}

class IndianB extends Banker{
 infoes(){
      let ta=10000;
    let totalslaray=this.salary+ta;
        console.log(`User nname ${this.names} Age user ${this.age} user salary${totalslaray} `)
    }

}

let info=new IndianB('jugal sharma' , 69 , 20000)
let student=new Banker('karan sharma' , 69 , 20000)

info.infoes()
student.Info()



// ✅ Quick Summary:

// Inheritance: share and reuse code from parent

// Polymorphism: override methods to change behavior

// Overriding: redefine method in child

// Overloading: same method name with different arguments (not native in JS)