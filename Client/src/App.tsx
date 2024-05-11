import { useState } from 'react'
import './global.css'
import { useThemeContext } from './contexts/ThemeContextProvider'
import FullScreenLoader from './shared/FullScreenLoader';
import ResonsiveChatDrwer from './shared/ResonsiveChatDrwer';
import { Grid } from '@mui/material';

function App() {

// const {mode,handleSetTheme}=useThemeContext();
  return (
    // <FullScreenLoader/>
    // <div>
    //   {mode}
    //   <button onClick={()=>{
    //     handleSetTheme(mode==="dark" ? "light":"dark");
    //   }}>Change mode</button>
    // </div>
    <Grid container alignItems="center" flexDirection="row">
      <ResonsiveChatDrwer/>
  </Grid>
  )
}

export default App
