import React from 'react'
import RoomsList from '../components/RoomsList'
import RoomsFilter from '../components/RoomsFilter'
import {withRoomConsumer} from "../components/Context"
import Loading from "./Loading"

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />

    }
    else {
        return (
            <div>
                
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms ={sortedRooms}/>
            </div>
        )
    }

}

export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomsList from '../components/RoomsList'
// import RoomsFilter from '../components/RoomsFilter'
// import { RoomConsumer } from "./Context"
// import Loading from "./Loading"

// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     return (
// <div>
//     hello from rooms container
//     <RoomsFilter />
//     <RoomsList />
// </div>
//                     )
//                 }
//             }
//             <div>
//                 hello from rooms container
//             <RoomsFilter />
//                 <RoomsList />
//             </div>

//         </RoomConsumer>

//     )
// }

// export default RoomsContainer

