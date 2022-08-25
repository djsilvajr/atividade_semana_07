import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './Footer-div'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Header */}
    <App />
    <Footer />
  </React.StrictMode>
)
