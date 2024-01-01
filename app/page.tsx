"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputNumber, setInputNumber] = useState(0);
  const [fibnacci, setFibnacci] = useState(0);

  useEffect(() => {
    async function _fib() {
      const { fib } = await import("../wasm/pkg");
      setFibnacci(fib(inputNumber));
    }
    _fib();
  }, [inputNumber]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Fibonacci</h1>
        <h2>Input Number: {inputNumber}</h2>
        <button
          onClick={() => {
            inputNumber > 0 ? setInputNumber(inputNumber - 1) : 0;
          }}
        >
          -
        </button>
        <button onClick={() => setInputNumber(inputNumber + 1)}>+</button>
        <h2>Fibonacci Nmber: {fibnacci}</h2>
      </div>
    </main>
  );
}
