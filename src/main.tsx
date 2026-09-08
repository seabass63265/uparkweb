import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ProductPage from './upark/ProductPage.tsx'
import CompanyPage from './upark/CompanyPage.tsx'
import InvestorsPage from './upark/InvestorsPage.tsx'
import BetaPage from './upark/BetaPage.tsx'
import ScrollToTop from './upark/ScrollToTop.tsx'

// StrictMode is intentionally omitted: its dev-only double-invoke of effects
// makes GSAP ScrollTrigger leave duplicate pin spacers on these scrollytelling
// pages. Effects are still cleaned up properly via gsap.context().revert().
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/investors" element={<InvestorsPage />} />
      <Route path="/join" element={<BetaPage />} />
    </Routes>
  </BrowserRouter>,
)
