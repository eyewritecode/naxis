import { sampleCoins } from '@/data/sampleCoins'
import React from 'react'
import MemecoinCard from './memecoinCard'

const MemecoinList = () => {
  return (
    <section className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {sampleCoins.map(coin =>
        <MemecoinCard key={coin.ticker} {...coin} />
      )}
    </section>
  )
}

export default MemecoinList
