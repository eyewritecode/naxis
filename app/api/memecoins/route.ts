import { NextResponse } from 'next/server'
import { Memecoin } from '@/interfaces/memecoin'

export async function GET() {
  const apiKey = process.env.BIRDEYE_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'Birdeye API key not found' }, { status: 500 })
  }

  const res = await fetch("https://public-api.birdeye.so/defi/token_trending?sort_by=rank&sort_type=asc&offset=0&limit=10", {
    headers: { "X-API-KEY": apiKey },
    cache: 'no-store',
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch trending tokens' }, { status: 500 })
  }

  const response = await res.json()
  const tokens = response.data.tokens as Memecoin[]

  const mapped: Memecoin[] = tokens.map((token) => ({
    id: token.address,
    name: token.name,
    symbol: token.symbol,
    imageUrl: token.logoURI,
    marketcap: token.marketcap,
    logoURI: token.logoURI,
    address: token.address,
    price: token.price,
    change: token.change
  }))

  return NextResponse.json(mapped)
}
