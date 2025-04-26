import React from 'react'
import Navbar from '../components/Navbar'
import NavBottom from '../components/Nav/NavBottom'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Sell from '../components/Sell'

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavBottom />
        <Content />
        <Sell />
        <Footer />
    </div>
  )
}

export default Home