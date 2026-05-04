import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DrinksMenu from './DrinksMenu'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bar-lounge/drinks-menu" element={<DrinksMenu />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
