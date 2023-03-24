import React from 'react'

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <h4>Ad</h4>
      <div ><a href='https://preply.com/en/?pref=MzMzNzAwMg==&id=1679504791.729794' target="_blank">
          <img className='bannerAd' src='/PreplyAd.png' alt='image'/></a></div>
      <h4>Made With</h4>
        <a href="https://www.mathjax.org">
            <img title="Powered by MathJax"
            src="https://www.mathjax.org/badge/badge-square.png"
            border="0" alt="Powered by MathJax" />
        </a>
        <h4>And,</h4>
        <div className='bottom-links'>
        <a href="https://github.com/react-grid-layout/react-grid-layout" target="_blank">react-grid-layout</a> 
        <a href="https://www.npmjs.com/package/better-react-mathjax" target="_blank">better-react-mathjax</a>
        <a href="https://mui.com/" target="_blank">Material UI</a>

        <p>Developed by Crystal Parker</p>
        </div>
    </div>
  )
}

export default BottomBar