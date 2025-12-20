1️⃣ What are Default Props?

Default props are values assigned to a component’s props when the parent doesn’t provide them.

This ensures your component always has a valid value to work with.

Think of it as a fallback value.

2️⃣ Example: Using Default Props
About.jsx
import React from 'react';

function About({ name, age }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Default props
About.defaultProps = {
  name: 'Anonymous',
  age: 18
};

export default About;

Home.jsx (Parent)
import React from 'react';
import About from './About';

function Home() {
  return (
    <div>
      <About />            {/* No props passed → uses default props */}
      <About name="Jugal" /> {/* Only name passed → age uses default */}
    </div>
  );
}

export default Home;


✅ Output:

Name: Anonymous
Age: 18

Name: Jugal
Age: 18

3️⃣ Key Points

Default props are only used if the parent doesn’t provide a value.

If the parent passes a prop, it overrides the default.

Useful for making components reusable and safe.

4️⃣ Modern Alternative: Default Parameter Destructuring

You can also use ES6 destructuring defaults instead of defaultProps:

function About({ name = 'Anonymous', age = 18 }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}


Works the same way.

Often preferred in functional components in modern React.

🔥 Pro Tip (Interview-level)

defaultProps is still used for class components.

For functional components, destructuring defaults is cleaner.

Helps prevent undefined errors when props are missing.