"use client";
import * as React from "react";
export const LibraryThemeContext = React.createContext({});
export default function LibraryThemeProvider({ children }) {
  return React.createElement(
    LibraryThemeContext.Provider,
    { value: "dark" },
    children
  );
}
