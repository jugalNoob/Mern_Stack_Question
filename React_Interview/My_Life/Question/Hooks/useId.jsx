import React, { useId } from 'react'

function Home() {

  const inputId1 = useId()
  const inputId2 = useId()

  return (
    <div>
      <form>

        <label htmlFor={inputId1}>First Input</label>
        <input id={inputId1} type="text" />

        <label htmlFor={inputId2}>Second Input</label>
        <input id={inputId2} type="text" />
      </form>
    </div>
  )
}

export default Home