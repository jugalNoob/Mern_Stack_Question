
 ////---->Normal Inpute oUTFunction field 

import React, { useState } from 'react';

function Fromcode() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // clear fields
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>

      </form>

      <h2>Preview:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Fromcode;



/// -------------------->>>Password Hide IN react from ---------------->>


✅ Password Hide & Show Example
import React, { useState } from "react";

function Fromcodes() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);   // toggle state

  return (
    <div>

      <input
        type={show ? "text" : "password"}      // hide/show logic
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      <h3>Password: {password}</h3>

    </div>
  );
}

export default Fromcodes;

🔥 How it works?
✔ show state controls visibility

If show = true → type="text"

If show = false → type="password"

✔ Toggle on button click
setShow(!show)

✔ Show button changes label automatically
{show ? "Hide" : "Show"}

⭐ Output Behavior

By default password is hidden

When click "Show" → password becomes visible

When click "Hide" → password becomes hidden again

If you want, I can also add:
✔ eye icon (👁️ / 👁️‍🗨️)
✔ password strength meter
✔ validation rules



/// ----- check Box and Redio box simple Logix ---------->>>

import React, { useState } from "react";

function SingleCheckbox() {
  const [agree, setAgree] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
      <label>I Agree</label>

      <h3>Status: {agree ? "Checked" : "Not Checked"}</h3>
    </div>
  );
}

export default SingleCheckbox;



import React, { useState } from "react";

function RadioBox() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <h2>Selected: {gender}</h2>
    </div>
  );
}

export default RadioBox;



