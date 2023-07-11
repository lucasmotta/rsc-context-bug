'use client'

import { createContext } from 'react'

export const LocalThemeContext = createContext({})

export default function LocalThemeProvider({ children }: any) {
  return (
    <LocalThemeContext.Provider value="dark">
      {children}
    </LocalThemeContext.Provider>
  )
}
