import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null); // ref for button

  // Input manipulation
  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log(inputRef);
    console.log(inputRef.current); // Logs the input element
    inputRef.current.focus(); // Focus input
    inputRef.current.style.color = 'red';
    inputRef.current.placeholder = 'Enter User Password';
    inputRef.current.value = '12345';
  };

  // Button manipulation
const ClickToggle = () => {
  if (buttonRef.current.style.color === 'red') {
    // Currently red → change to blue
    buttonRef.current.style.color = 'blue';
    buttonRef.current.innerText = 'Click me';
  } else {
    // Otherwise → change to red
    buttonRef.current.style.color = 'red';
    buttonRef.current.innerText = 'Toggled!';
  }
};

  return (
    <div>
      <button ref={buttonRef} onClick={ClickToggle}>
        Toggle Button
      </button>

      <form>
        <input type="text" ref={inputRef} placeholder="Type something..." />
        <button onClick={handleClick}>Click Button</button>
      </form>
    </div>
  );
}

export default App;
