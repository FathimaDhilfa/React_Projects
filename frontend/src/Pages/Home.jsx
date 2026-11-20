import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import CategorySection from '../Components/CategorySection'
import ProductSection from '../Components/ProductSection'

const Home = () => {
  return (
    <>
        <Navbar />
        <main>
            <Hero />
            <CategorySection />
            <ProductSection />
        </main>
    </>
  )
}

export default Home