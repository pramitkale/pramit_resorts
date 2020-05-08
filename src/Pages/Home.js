import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


function Home() {
    return (
        <>
        <Hero><Banner title='Welcome To Pramit Resorts' subtitle='Delux Rooms Starting At Rs.10K'>
           <Link to="/rooms"><button className="btn-primary">Explore Rooms</button></Link> 
            </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
            
                </>
    )
}

export default Home
