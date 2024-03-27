import React from 'react'
import ReactDOM from 'react-dom/client'
import AppStore from './AppStore.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStore />
  </React.StrictMode>,
)
