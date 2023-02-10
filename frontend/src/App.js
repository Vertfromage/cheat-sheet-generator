import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import React from "react";
import { MathJaxContext } from "better-react-mathjax"


// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  // config for MathJaxContext  
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  }

  // This is for overriding styles on componenets - can also use sx ={{}} to style specific componenents
  const theme = createTheme({
    components: {
      MuiContainer:{
        styleOverrides: {
          root: {
            background:'white', padding:"10px", margin:'15px 0px', 
        borderRadius:"20px", border: '4px solid pink', boxShadow: '5px 10px 18px #888888'
          },
      },
    },
  }})
  
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route
          path ='/'
          element = {<MathJaxContext config={config}><Home/></MathJaxContext>}
          />
        </Routes>
      </div>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
