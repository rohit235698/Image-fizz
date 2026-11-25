import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// prevent events from bubbling up
window.addEventListener("dragover", (e: unknown) => e instanceof DragEvent && e.preventDefault());
window.addEventListener("drop", (e: unknown) => e instanceof DragEvent && e.preventDefault());
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);