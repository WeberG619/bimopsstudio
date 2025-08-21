import { useState, useEffect } from "react";

export function useSabbathMode() {
  const [isSabbath, setIsSabbath] = useState(false);

  useEffect(() => {
    // Check if its currently Sabbath (Friday sundown to Saturday sundown)
    const checkSabbath = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      
      // Simple implementation: Sabbath is from Friday 6 PM to Saturday 6 PM
      if (day === 5 && now.getHours() >= 18) {
        // Friday after 6 PM
        setIsSabbath(true);
      } else if (day === 6 && now.getHours() < 18) {
        // Saturday before 6 PM
        setIsSabbath(true);
      } else {
        setIsSabbath(false);
      }
    };

    // Check immediately
    checkSabbath();
    
    // Check every minute
    const interval = setInterval(checkSabbath, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleSabbathMode = () => {
    setIsSabbath(!isSabbath);
    localStorage.setItem("sabbath-mode", JSON.stringify(!isSabbath));
  };

  return { isSabbath, toggleSabbathMode };
}
