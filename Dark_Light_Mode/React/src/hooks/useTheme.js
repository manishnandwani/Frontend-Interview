import { useState,useEffect } from 'react'

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);
  
  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  return { isDark, toggleTheme };
};

export default useTheme;