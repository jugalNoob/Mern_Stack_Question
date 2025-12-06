import React from 'react'

function Home() {

  function Question(a , b , c){
    return a + b , c
  }

  let name='karan'

  console.log(Question(10 , 20 , 'jugal' , name))
  return (
    <div>Home</div>
  )
}

export default Home