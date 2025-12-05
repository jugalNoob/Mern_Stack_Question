import mongoose from 'mongoose'


const studentdata=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})


const Register= new mongoose.model('Urls' , studentdata)
export default Register;