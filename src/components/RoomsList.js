import React from 'react'
import Room from "../components/Room"
import Rooms from '../Pages/Rooms'

function RoomsList({rooms}) {
    if(rooms.length===0){
        return (<div className="empty-search">
            <h3>sorry, unfortunately no room matches ypur search</h3>
        </div>)
}
else{
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((item,index)=>{
                        return <Room key={item.id} room={item}/>
                        
                    })
                }
            </div>

        </section>
    )
}



    

        
    
}

export default RoomsList
