import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LearnCss from './LearnCss'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <LearnCss/> */}
  </React.StrictMode>,
)
