import React from 'react';import {createRoot} from 'react-dom/client';
import './styles.css';
function App(){return <div className='hero'><h1>MOTIONHAUS</h1><p>Premium Automotive Media</p></div>}
createRoot(document.getElementById('root')).render(<App/>)
