import { Memecoin } from '@/interfaces/memecoin'
import Image from 'next/image'
import React from 'react'

const MemecoinCard = (coin: Memecoin) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 w-full max-w-xs md:max-w-sm">
      <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-white/10">
        <Image
          src={coin.imageUrl}
          alt={coin.name}
          width={20}
          height={20}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col text-left flex-grow">
        <span className="text-sm font-semibold">{coin.ticker.toUpperCase()}</span>
        <span className="text-xs text-white/60">{coin.name}</span>
      </div>

      <div className="text-right">
        <div
          className={`text-sm font-bold ${
            coin.change >= 0 ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {coin.change >= 0 ? '+' : ''}
          {coin.change.toFixed(1)}%
        </div>
        <div className="text-xs text-white/50">
          {coin.marketCap ?? '$—'}
        </div>
      </div>
    </div>
  )
}

export default MemecoinCard
