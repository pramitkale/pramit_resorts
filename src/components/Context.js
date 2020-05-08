import React, { Component } from 'react'
// import items from "../data"
import Client from "../Contentful"




const RoomContext=React.createContext();
// // let a=2
// // let b=4
// // console.log(2==2)



class RoomProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rooms:[],
            sortedRooms:[],
            featuredRooms:[],
            loading:true,
            type:"all",
            capacity:1,
            price:0,
            minPrice:0,
            maxPrice:0,
            minSize:0,
            maxSize:0,
            breakfast:false,
            pets:false


             
        }
    }
    getData=async ()=>{
        try {
            let response=await Client.getEntries(
                {
                    // order: 'field.price'
                    order: "sys.createdAt"
                }
            )

            let rooms=this.formatData(response.items)
            console.log(rooms)
            let featuredRooms=rooms.filter(room=>room.featured==true)
            let maxPrice=Math.max(...rooms.map(item=>item.price
                
            ))
            let maxSize=Math.max(...rooms.map(item=>item.size
                
            ))
            this.setState({
                rooms,featuredRooms, sortedRooms:rooms,loading:false,
                price:maxPrice,maxPrice,maxSize
            })
            
        } 

        
        
        catch (error) {
            console.log(error)
        }
    }

    
    componentDidMount(){
        
        this.getData()
    }
    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>
                image.fields.file.url )
            let room={...item.fields,images,id}
            // console.log({...item.fields})
            // images chodke baki sari properties aa gyee hai ...item.field ki
            // console.log(room)
            return room;
           

        })
        return tempItems;
    }
    handleChange=(event)=>{
        const target=event.target
        const value=target.type==="checkbox"?target.checked:target.value
        const name=target.name
        this.setState({
           [name] :value
        },this.filterRooms)
        // console.log(type     ,name,      value)
    }
    
    filterRooms=()=>{
       let {rooms,capacity,price,minSize,maxSize,breakfast,pets,type}=this.state
       capacity=parseInt(capacity)
       price=parseInt(price)
       let tempRooms=[...rooms]
       if(type !=="all"){
           tempRooms=tempRooms.filter((room)=>room.type===type)
       }
       if (capacity!==1){
           tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
       }
       tempRooms=tempRooms.filter(room=>room.price<=price)
       tempRooms=tempRooms.filter(room=>room.size<=maxSize && room.size >=minSize)
       if(breakfast){
           tempRooms=tempRooms.filter(room=>room.breakfast===true)}
       if(pets){
           tempRooms=tempRooms.filter(room=>room.pets===true)
       }
       this.setState({
           sortedRooms:tempRooms

       })
       
    }
    getRoom=(slug)=>{
        const tempRooms=[...this.state.rooms]
         let room =tempRooms.find(room=>room.slug===slug)
         return room;
    }
    
    
    render() {
        // console.log([...this.state.rooms])
        return (
           <RoomContext.Provider value={{...this.state , getRoom:this.getRoom,handleChange:this.handleChange}}>
               {this.props.children}
           </RoomContext.Provider>
           
        
           
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function consumerWrapper(props){
        return (<RoomConsumer>
            {(value) => <Component {...props} context={value}/>}


        </RoomConsumer>)
    }
}

export {RoomContext,RoomProvider,RoomConsumer }

