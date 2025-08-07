'use client'

import { useMemecoin } from '@/hooks/useMemecoin'
import React from 'react'
import MemecoinCard from './memecoinCard'

const MemecoinList = () => {
  const { data: tokens, loading } = useMemecoin()

  if (loading) return <p>Loading...</p>

  return (
    <section className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {tokens.map(coin =>
        <MemecoinCard key={coin.symbol} {...coin} />
      )}
    </section>
  )
}

export default MemecoinList
