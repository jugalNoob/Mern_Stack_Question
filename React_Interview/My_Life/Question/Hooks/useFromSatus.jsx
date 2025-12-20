"use client";
import { useState } from "react";

export default function SaveButton() {
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("submit", name, password);

    setPending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br /><br />

      <input type="email" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <button disabled={pending}>
        {pending ? "Submitting..." : "ClickForm"}
      </button>
    </form>
  );
}
