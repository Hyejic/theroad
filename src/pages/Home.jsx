import React, { useState, useRef, useEffect } from 'react';
// import * as firstMotion from '../utils/motion.js';
// import { BlindScroll } from '../components/BlindScroll.jsx';
import { WindowScroll } from '../components/WindowScroll.jsx';
import Header from '../components/Header.jsx';

function Home() {
    return (
        <>
        {/* <Header page="home"/> */}
        <WindowScroll />
        </>
    );
}
  
export default Home;