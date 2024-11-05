import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './pages/App.jsx';

const domNode = document.querySelector('#react-app');
const root = createRoot(domNode);

root.render(<App />);
