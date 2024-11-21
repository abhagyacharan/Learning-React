import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GeneralInfo from './components/General.jsx'
import Education from './components/Education.jsx'
import Profession from './components/Profession.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <Education />
    <Profession />
  </StrictMode>,
)