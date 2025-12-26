import React,{useState , useCallback} from 'react'
import About from './page/About'

function App() {
console.log('hello')
  const [count , setCount]=useState(0)
  
  const Handle=useCallback(()=>{
    setCount(count+1)

  },[count])


  return (
    <div>

<h1>{count}</h1>

<About update={Handle}>

</About>


    </div>
  )
}

export default App
