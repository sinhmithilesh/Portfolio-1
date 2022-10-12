import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom/client';
// import AppAnimation from './AppAnimation';
import AppPractice from './AppPractice';
import AppMultistepform from './AppMultistepform';
import StepContext from './componentMultistepFrom/context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <StepContext>
     <App />
    </StepContext>
  </React.StrictMode>
  
);
 
   