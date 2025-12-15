import React,{useState,useMemo} from 'react'


function Home() {
  const [name  , setName]=useState('')

  function ExpensiveCaluation({num}){
    const computerValue=useMemo(()=>{
    let result=0
    for(let i=0; i< num+100; i++){
      
      result +=i;
    }
    return result;
    },[num])

  }

  return (
    <div>

<h1>computer Value: {computerValue}</h1>
    </div>
  )
}

export default Home


  // setState({provider , signer , address})   


   
//       {isLoaded ? (
//         data && data.user ? (
//           <>
//           <div className="users">

       
//             <h1>{data.user.name}</h1>
//             <h1>{data.user.email}</h1>
//             <h1>{data.user.age}</h1>
//             <h1>{data.user.password}</h1>
//             <h1>{data.user.gender}</h1>
//             <h3>{data.io}</h3>
   
//             </div>
//           </>
//         ) : (
//           <h1>User data not available</h1>
//         )
//       ) : (
//         <h1>Loading...</h1>
//       )}