 
console.log(user??name); // ❌ runtime error



  // 1. The "Expensive" Calculation
  // This only re-runs if 'count' changes. 
  // If 'otherState' changes, React skips this and uses the cached result.
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 100000 + 1000;
  }, [count]); 

  return (
    <div>
      <h1>Result: {expensiveCalculation}</h1>
      
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      
      <button onClick={() => setOtherState(!otherState)}>
        Re-render Component (Won't trigger calculation)
      </button>
    </div>
  );
}

export default About

{/* {load ? ( ) : ( )} */}

// {users.map((user, index) => (
//   <UserCard key={index} {...user} />
// ))}