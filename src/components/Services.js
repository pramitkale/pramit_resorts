import React, { Component } from 'react'
import Title from "../components/Title"
import {FaCocktail ,FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export class Services extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    
        this.state = {
             services:[
                 {
                     icon:<FaCocktail/>,
                     title:"Free Cocktails",
                     info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, neque."
                 },
                 {
                     icon:<FaHiking/>,
                     title:"Free Hiking",
                     info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, neque."
                 },
                 {
                     icon:<FaShuttleVan/>,
                     title:"Free Shuttlevan",
                     info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, neque."
                 },
                 {
                     icon:<FaBeer/>,
                     title:"Free Beers",
                     info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, neque."
                 }
             ]
        }
    }
    
    render() {
        return (
            <section className="services">
              <Title title="Services"/>
              <div className="services-center">
                  {
                      this.state.services.map(
                          (item,index)=>{
                              return <article key={index} className="service">
                                  <span>{item.icon}</span>
                                  <h6>{item.title}</h6>
                                  <p>{item.info}</p>
                                </article>
                          }

                      )
                  }
              </div>
                
            </section >
        )
    }
}

export default Services
