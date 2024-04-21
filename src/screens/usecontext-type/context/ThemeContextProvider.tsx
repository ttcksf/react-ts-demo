import React, { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

// 型推論によってシンプルなuseContextでは型指定が不要になっている
// valueにcreateContextで作られたもの（React.Context型）以外を入れると型エラーにしてくれる
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    // <ThemeContext.Provider value={"theme"}>{children}</ThemeContext.Provider>
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
