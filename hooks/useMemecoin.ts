'use client'

import { Memecoin } from "@/interfaces/memecoin";
import { useEffect, useState } from "react";

export function useMemecoin(){
  const [data, setData] = useState<Memecoin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/memecoins')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
