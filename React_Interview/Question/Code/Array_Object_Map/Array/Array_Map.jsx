import React, { useState } from 'react'

function Home() {

  let [data, setData] = useState(['jugal', 'karan', 'anku', 'nkahile'])

  if (data.length === 0) return <h2>...loading</h2>

  return (
    <div>
  {
      data.length === 0
        ? <h2>...loading</h2>
        : data.map((user, index) => (
            <h1 key={index}>jugal {user}</h1>
          ))
    }
    </div>
  )
}

export default Home

