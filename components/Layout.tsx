import React , { useState } from 'react';
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { createContext } from 'react';
import { visitNodes } from 'typescript';

type Mode = {
    darkMode: boolean;    
    toggleMode: () => void
  }

export const ModeContext = createContext<Mode>({darkMode:true, toggleMode: () => {}});

const Layout = ({ children, ...props }: PropsWithChildren) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(prevState => !prevState);
    };
    return (  
        <div className={darkMode ? "content":"darkContent"}>
          <ModeContext.Provider value={{darkMode, toggleMode}}>
            <Navbar />
            { children }
            <Footer />
           </ModeContext.Provider>
        </div>
    );
}
 
export default Layout;