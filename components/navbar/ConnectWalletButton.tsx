'use client'

import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import dynamic from 'next/dynamic'


export default dynamic(
  () => Promise.resolve(() => (
    <WalletMultiButton />
  )),
  { ssr: false }
)
