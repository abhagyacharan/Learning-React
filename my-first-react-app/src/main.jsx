import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import FavFood from './Food.jsx'
import Htmltest from './Html_to_jsx.jsx'
import ToDoList from './person.jsx'
import Animals from './animals.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animals />
  </StrictMode>,
)
