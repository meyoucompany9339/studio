import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import { AnalyticsProvider } from './analytics/AnalyticsProvider'
import { ContactModalProvider } from './components/contact/ContactModalProvider'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AnalyticsProvider>
          <ContactModalProvider>
            <App />
          </ContactModalProvider>
        </AnalyticsProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
