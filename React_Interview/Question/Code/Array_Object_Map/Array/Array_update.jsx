import React, { useState } from 'react'

function Home() {
  let [data,setData] = useState(['jugal', 'karan', 'anku', 'nkahile'])
  // Add or Save edited item
  const handleSubmit = (name) => {
    // e.preventDefault()
    // If adding → add new item
data[data.length-1]=name
console.log(data)
setData([...data])
  }
  return (
    <div>
      <form>
        <input 
          type="text"
       
      placeholder='chnage name'
      onChange={(e)=>handleSubmit(e.target.value)}
        />
      </form>


 {
        data.length === 0
          ? <h2>...loading</h2>
          : data.map((user, index) => (
              <h1 key={index}> {user}</h1>
            ))
      }


    </div>
  )
}

export default Home
