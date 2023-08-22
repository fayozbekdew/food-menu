import React from 'react'
// React-router-dom
 import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/Footer'
import Header from '../component/Header'


const RootLayout = () => {
  return (
    <>
    <Header/>
    <main className='flex-grow '>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout