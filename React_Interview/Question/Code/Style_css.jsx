Got it! You want to understand different ways to apply styles in React. Let’s go step by step with examples for inline, dynamic, CSS module, and external styles.

🔹 1️⃣ Inline Styles

Written directly in JSX as an object

Style properties are camelCase instead of kebab-case

import React from 'react';

function Form() {
  return (
    <div style={{ color: 'white', backgroundColor: 'blue', padding: '20px' }}>
      Inline Styled Form
    </div>
  );
}

export default Form;


✅ Good for quick small styles.
❌ Not recommended for complex styling.

🔹 2️⃣ Dynamic Styles

Change styles based on state or props

import React, { useState } from 'react';

function Form() {
  const [isActive, setIsActive] = useState(false);

  const dynamicStyle = {
    backgroundColor: isActive ? 'green' : 'red',
    color: 'white',
    padding: '20px',
  };

  return (
    <div style={dynamicStyle} onClick={() => setIsActive(!isActive)}>
      Click me to change color
    </div>
  );
}

export default Form;


Click toggles background color dynamically.

Great for conditional styling.

🔹 3️⃣ External CSS File

Create a separate .css file and import it

Form.css

.form-container {
  background-color: purple;
  color: white;
  padding: 20px;
  border-radius: 10px;
}


Form.jsx

import React from 'react';
import './Form.css';

function Form() {
  return <div className="form-container">Styled using external CSS</div>;
}

export default Form;


✅ Good for global styling and reuse.

🔹 4️⃣ CSS Modules (Scoped CSS)

Avoids class name conflicts

Styles are scoped locally

Form.module.css

.container {
  background-color: orange;
  color: white;
  padding: 20px;
  border-radius: 10px;
}


Form.jsx

import React from 'react';
import styles from './Form.module.css';

function Form() {
  return <div className={styles.container}>Scoped CSS Module</div>;
}

export default Form;


Class names are hashed automatically by React → no conflict.

🔹 5️⃣ Styled Components (Optional, advanced)

CSS-in-JS library for dynamic styles

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: teal;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

function Form() {
  return <Container>Styled Component</Container>;
}

export default Form;


Very popular in modern React apps.




| Styling Method    | Usage                          | Pros                | Cons                    |
| ----------------- | ------------------------------ | ------------------- | ----------------------- |
| Inline Style      | `style={{}}`                   | Quick, easy         | Not reusable, verbose   |
| Dynamic Style     | `style={obj}` with state/props | Conditional styling | Can get messy           |
| External CSS      | `.css` + `import`              | Reusable, familiar  | Global, class conflicts |
| CSS Modules       | `.module.css`                  | Scoped, reusable    | Needs build config      |
| Styled Components | `styled-components`            | Dynamic + scoped    | Extra dependency        |
