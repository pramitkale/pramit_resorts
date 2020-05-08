import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import {RoomContext} from "../components/Context"
import Hero from "../components/Hero"
import StyledHero from "../components/styledHero"

export class SingleRoom extends Component {
    constructor(props) {
        super(props)
    
    //    console.log(this.props)  
    this.state={
        slug:this.props.match.params.slug,
        defaultBcg
    }           
        }
    static contextType=RoomContext;
    
    
    
    render() {
        const {getRoom}=this.context
        const room=getRoom(this.state.slug)
        // console.log(room)
        if (!room){
            return <div className='error'>
                <h6>No such A room Available.....</h6>
                <Link to="/rooms" className='btn-primary'>Back to rooms</Link>
                </div>
        }
        else{
            const {breakfast,capacity,description,extras,images ,name,pets,price,size,slug,type}=room;
            const [mainImg ,...defaultImg]=images
            // very imp
            console.log(defaultImg)

            return (
                <>
                <StyledHero Img={images[0]||this.state.defaultBcg}>jj
                    <Banner title={`${name} room`}>
                    <Link to='/rooms'className='btn-primary'> Back to rooms</Link>
                    </Banner>
                </StyledHero>
                  <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((item,index)=>{
                                return <img key={index} src={item} alt={name}/>
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                        <h3>Info</h3>
                    <h6>price:${price}</h6>
                    <h6>size:{size}SQFT</h6>
                   < h6>max capacity :{
                       capacity>1? `${capacity} people`:`${capacity} person`
                   }
                    </h6>
                   < h6>{
                       pets? `pets allowed`:`pets not allowed`
                   }
                    </h6>
                   < h6>{
                       breakfast && "free breakfast included "
                   }
                    </h6>
                        </article>
                    </div>
                    </section>
                    <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {
                                extras.map((item,index)=>{
                                   return <li>{item}</li>
                                })
                            }

                        </ul>

                    </section>
                    </>
                
            )
            }
                
       
        
    }
}

export default SingleRoom
