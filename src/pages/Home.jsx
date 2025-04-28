import React from 'react'
import Navbar from '../components/Navbar'
import NavBottom from '../components/Nav/NavBottom'
import Footer from '../components/Footer'
import Content from '../components/Content'

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavBottom />
        <Content />
        <Footer />
    </div>
  )
}

export default Home