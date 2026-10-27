import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from "../src/app/app.store.js"
import "./app/index.css"
import App from './app/App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}> 
    <App />
    </Provider>
  </StrictMode>,
)
