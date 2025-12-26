import React, { useState } from 'react';

function About() {
  const [load, setLoad] = useState(false);

  const [count, setCount] = useState([
    { jugal: 'jugal sharma', roll: 45 },
    { jugal: 'karan sharma', roll: 69 }
  ]);

  return (
    <div>
      {load ? (
        count.length === 0 ? (
          <h2>No data available</h2>
        ) : (
          count.map((item, index) => (
            <div key={index}>
              <p>Name: {item.jugal}</p>
              <p>Roll: {item.roll}</p>
            </div>
          ))
        )
      ) : (
        <h2>Loading...</h2>
      )}

      <button onClick={() => setLoad(!load)}>Toggle Load</button>
    </div>
  );
}

export default About;


Nested conditional (multiple conditions)

const StatusMessage = ({ c1, c2 }) => {
  if (!c1) return <h1>condition1 is false</h1>;
  if (!c2) return <h1>condition1 is true but condition2 is false</h1>;
  return <h1>Both are true</h1>;
};

  const [show , setShow]=useState(18)
  const [load , seLoad]=useState(true)

// In your main component:
<StatusMessage c1={condition1} c2={condition2} />



{load ? ( show==18 ? 'A' : 'B' ) : ( 'C' )}

{
  load ? (show == 18 ?'A' : 'B' ): ('')}

  {
    load ? (show == 18 ?'A' : 'B' ):(
      <h1>not equal</h1>
    )
  }


{/* {load ? ( ) : ( )} */}
  :::::::::::::::::::::::Adavance ------------>>