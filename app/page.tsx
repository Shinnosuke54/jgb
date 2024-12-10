"use client"; // Marks this component as a Client Component

function calculate() {
  const n = parseInt(document.getElementById("n").value);
  const i = parseFloat(document.getElementById("i").value); // Use parseFloat for decimals
  const p = parseFloat(document.getElementById("p").value);
  const fv = parseFloat(document.getElementById("fv").value);
  let x = 0;

  for (let j = 1; j < n; j++) {
    x += p / (1 + i / 100) ** j;
  }
  x += (p + fv) / (1 + i / 100) ** n;

  document.getElementById("pv").innerHTML = `The present value is ${x.toFixed(2)}`; // Display rounded value
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1>Bond Price Calculator</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Input year to maturity:</li>
          <input type="text" id="n" className="text-green-500" />
          <li>Input interest:</li>
          <input type="text" id="i" className="text-green-500" />
          <li>Input payment:</li>
          <input type="text" id="p" className="text-green-500" />
          <li>Input future value:</li>
          <input type="text" id="fv" className="text-green-500" />
          <li></li>
          <button onClick={calculate} className="bg-white text-green-500 font-bold py-1 px-3 w-100 h-100 rounded-[50px]]">Calculate</button>
          <p id='pv' className="text-green-500 my-5"></p>
        </ol>
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Made by Shinnosuke Ino</p>
      </footer>
    </div>
  );
}
