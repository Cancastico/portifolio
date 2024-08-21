"use client"
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define o tipo para o contexto do tema
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

// Cria o contexto com um valor padrão de `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define as props do ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Cria o provider para o tema
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('dark');


  useEffect(() => {
    const storage = localStorage.getItem('theme');
    if (storage) {
      setTheme(storage)
    } else {
      localStorage.setItem('theme', theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook para usar o contexto do tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};