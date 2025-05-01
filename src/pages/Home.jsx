import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import NavBottom from '../components/Nav/NavBottom'
import Footer from '../components/Footer'
const Content = lazy(() => import('../components/Content'))

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavBottom />
        <Suspense fallback={<div>Loading....</div>}>
        <Content />
        </Suspense>
        <Footer />
    </div>
  )
}

export default Home