import * as React from 'react'
import LocalThemeProvider from './LocalThemeProvider'
import LibraryThemeProvider from 'library'

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <LocalThemeProvider>
      <LibraryThemeProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </LibraryThemeProvider>
    </LocalThemeProvider>
  )
}
