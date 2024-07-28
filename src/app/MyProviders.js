import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

export default function MyProviders({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
