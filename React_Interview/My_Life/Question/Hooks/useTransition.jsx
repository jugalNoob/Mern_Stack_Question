import { useState, useTransition } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Heavy operation in transition
    startTransition(() => {
      const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

      const filtered = bigList.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );

      setResults(filtered);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />

      {isPending && <p>Loading...</p>}

      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
