import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import React from "react";
import { MathJaxContext } from "better-react-mathjax"

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar';


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
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route
          path ='/'
          element = {<MathJaxContext config={config}><Home/></MathJaxContext>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
