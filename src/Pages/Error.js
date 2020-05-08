import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

function Error() {
    return (
        <Hero><Banner title="404" subtitle="Ooops! Chek the URL">
           <Link to="/"><button className="btn-primary">Go 2 Home</button></Link> 
            </Banner>
            </Hero>
    )
}

export default Error
