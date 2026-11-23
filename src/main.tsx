import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// prevent events from bubbling up
window.addEventListener("dragover", (e: any) => e?.preventDefault());
window.addEventListener("drop", (e: any) => e?.preventDefault());
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);