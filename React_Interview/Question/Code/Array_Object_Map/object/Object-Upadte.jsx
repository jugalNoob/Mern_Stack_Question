/// ------>>> User Object Updatew.jsx


import React,{useState} from 'react'

function Home() {
   const [data, setData] = useState({
    
      name: 'jugal',
      class: '10th',
      age: 69,
      school: 'kv school'
   
   })
  const HandleUser=(val)=>{

data.name=val
console.log(data)
setData({...data}) //create a new object with shallow copy

  }

  return (
    <div>

    <form action="">

<input type="text" name="" id="" onChange={(e)=>HandleUser(e.target.value)} placeholder='object Chancks'/>



    </form>

    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    <h1>{data.class}</h1>
    <h1>{data.school}</h1>

{/* 
      {data.map((user, index) => (
        <div key={index}>
          <h1>Name: {user.name}</h1>
          <h1>Class: {user.class}</h1>
          <h1>Age: {user.age}</h1>
          <h1>School: {user.school}</h1>
        </div> */}
      {/* ))} */}

    </div>
  )
}

export default Home



///Update Under Array Object.js --------------------

import React,{useState} from 'react'

function Home() {
   const [data, setData] = useState([{
      name: 'jugal',
      class: '10th',
      age: 69,
      school: 'kv school'
   
   }])


const HandleUser=(name)=>{
data[data.length-1].age=name
console.log(data)
setData([...data]) //create a new object with shallow copy
  }

  return (
    <div>
    <form action="">
<input type="text" name="" id="" onChange={(e)=>HandleUser(e.target.value)} placeholder='object Chancks'/>
    </form>

      {data.map((user, index) => (
        <div key={index}>
          <h1>Name: {user.name}</h1>
          <h1>Class: {user.class}</h1>
          <h1>Age: {user.age}</h1>
          <h1>School: {user.school}</h1>
        </div> 
      ))}

    </div>
  )
}

export default Home