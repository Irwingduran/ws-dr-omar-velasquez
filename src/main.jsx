import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import SocialMediaButtons from './components/SocialMediaButtons';
import './index.css'; // Tailwind CSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
    <SocialMediaButtons/>
  </React.StrictMode>
);
