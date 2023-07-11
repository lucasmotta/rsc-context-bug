'use client'

import * as React from 'react'
import { LocalThemeContext } from './LocalThemeProvider'

interface LocalClientComponentProps {}

export const LocalClientComponent: React.FC<LocalClientComponentProps> = () => {
  const context = React.useContext(LocalThemeContext)

  console.log('LocalClientComponent', context)

  return <div>LocalClientComponent</div>
}
