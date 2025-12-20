Function Compostion |||||||||||||||||||||||

function add(a,b){
    return a+b
}

function multi(args){

    return  args[0] * args[1];
}

function square(val){
    return val * val
}

function composeTwo(f1 , f2){
    return function(a, b ){
        return f2(f1(a , b))
    }
}


const composeAll=(...fns)=>(...val)=>fns.reduce((a , b)=>b(a),val);


const c2f=(f1 , f2)=>(a ,b)=>f2(f1(a , b))



const task=composeAll(multi, square)
console.log(task(2 , 3))
