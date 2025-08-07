"use client"

import React, { useState } from 'react'

const SwapForm = () => {
  const [amount, setAmount] = useState("1");
  const [buyAll, setBuyAll] = useState(true);

  function handleBuy(){
    alert(`Buying ${buyAll ? 'all' : 'selected'} with ${amount} SOL`)
  }

  return (
    <section className="mt-12 w-full max-w-md bg-white/5 rounded-xl px-4 py-5 flex flex-col md:flex-row items-center gap-4">
      <div className="flex-grow w-full md:w-auto">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full text-center text-sm rounded-md px-3 py-2 bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/30"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm text-white/80">Buy {buyAll ? 'All' : 'Selected'}</label>
        <button
          onClick={() => setBuyAll(!buyAll)}
          className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
            buyAll ? 'bg-green-500' : 'bg-white/20'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
              buyAll ? 'translate-x-4' : ''
            }`}
          />
        </button>
      </div>
      <button
        onClick={handleBuy}
        className="text-sm bg-white text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
      >
        Buy
      </button>
    </section>
  )
}

export default SwapForm
