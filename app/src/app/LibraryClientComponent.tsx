'use client'

import * as React from 'react'
import { LibraryThemeContext } from 'library'

interface LibraryClientComponentProps {}

export const LibraryClientComponent: React.FC<
  LibraryClientComponentProps
> = () => {
  const context = React.useContext(LibraryThemeContext)

  console.log('LibraryClientComponent', context)

  return <div>LibraryClientComponent</div>
}
