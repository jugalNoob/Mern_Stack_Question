class SigUpSystem{
    constructor(names , email , password){
        this.names=names
        this.email=email
        this.password=password
    }

    loginUser(email , password){
        if(this.email === email && this.password === password){
            console.log(`Your email ${this.email}  and this your password ${this.password}`);
            return true;  // return success
        }else{
            console.log('check Your Email and Password');
            return false; // return fail
        }
    }

    Notification(email, password){
        if(this.loginUser(email, password)){
            console.log('Your Email Password is Correct');
        }else{
            console.log('Check Your email Password');
        }        
    }
}

const user = new SigUpSystem('jugal', 'karan@gmail.com', 45214523);

user.Notification('karan@gmail.com', 45214523);
console.log(user);

