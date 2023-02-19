import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import React from "react";
import { MathJaxContext } from "better-react-mathjax"


// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Test from './components/Test';


function App() {
  // config for MathJaxContext  
  // following this config: https://codesandbox.io/s/better-react-mathjax-example-latex-optimal-8nn9n
  // using version 3 makes fuzzy on browser print. 
  const config = {
    "fast-preview": {
      disabled: true
    },
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    },
    messageStyle: "none"
  }

  // This is for overriding styles on componenets - can also use sx ={{}} to style specific componenents
  const theme = createTheme({
    components: {
      MuiContainer:{
        styleOverrides: {
          root: {
            background:'white', padding:"5px", margin:'5px 0px', 
        borderRadius:"20px", border: '4px solid pink', boxShadow: '5px 10px 18px #888888'
          },
      },
    }
  }})
  
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <div className='pages'>
      <MathJaxContext  version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}>
        <Routes>
          <Route
          path ='/'
          element = {<Home/>}
          />
          <Route
          path ='/test'
          element = {<Test/>}
          />
        </Routes>
        </MathJaxContext>
      </div>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
