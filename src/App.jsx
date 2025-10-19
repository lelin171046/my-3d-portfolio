import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Projects } from './Pages';

import Navbar from './Components/NavBar';
import { SmoothCursor } from './Components/ui/smooth-cursor';

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <BrowserRouter>
            <SmoothCursor
        color="#a855f7"       // Purple
        size={30}             // Cursor size
        speed={0.35}          // Movement speed
        dotOpacity={0.4}      // Center dot transparency
        trailingOpacity={0.2} // Trail transparency
      />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
