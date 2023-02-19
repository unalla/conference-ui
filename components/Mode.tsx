import React, { useContext } from 'react';
import Switch from '@mui/material/Switch';
import { ModeContext } from './Layout';


export default function Mode() {
 
  const { darkMode, toggleMode } = useContext(ModeContext);

  return (
    
    <Switch
      checked={darkMode}
      onChange={toggleMode}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}