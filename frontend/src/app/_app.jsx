import NavBar from '@/components/NavBar';
import './global.css';

import React from 'react'

 function MyApp({Component, pageProps}) {
  return (
    <>
    <NavBar/><Component {...pageProps} />
    </>
  )
}

export default MyApp;