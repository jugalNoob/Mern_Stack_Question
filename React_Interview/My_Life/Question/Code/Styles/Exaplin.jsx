import React,{useState , useEffect ,useReducer , useRef , useCallback , useMemo} from 'react'

function Home() {
const [count , setCount]=useState(false)



  const Hnadle =()=>{
    // setCount(!count)

setCount(prev => !prev);
  }



  const ColoreChange={
    color:'red',
    backgroundColor:'black'
  }


  const ColoreB={
 color: 'green',
    backgroundColor: 'black'
  }

  useEffect(()=>{
console.log('jugal')
  },[])

  return (
    <div>

<h1 style={count? ColoreB : ColoreChange}>i am jugal sharma</h1>
<button onClick={Hnadle}> 
{count ? 'true' : 'false'}
</button>

    </div>
  )
}

export default Home