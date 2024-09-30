import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './landing_page/HomePage/Homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
