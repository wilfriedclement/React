/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/08/2024 - 18:29:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
