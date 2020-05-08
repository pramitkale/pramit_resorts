import React from 'react'
import { useContext } from "react"
import { RoomContext } from "./Context"
import Title from "../components/Title"

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
};


function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    // console.log(context)
    const { type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets, handleChange } = context;
        let types=getUnique(rooms,"type");
        types=[...types,"all"]
        types= types.map((item,index)=>{
            return <option value={item} key={index}>{item}</option>
        })
        let people=getUnique(rooms,"capacity");
        
        people= people.map((item,index)=>{
            return <option value={item} key={index}>{item}</option>
        })



    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            < form className ="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
                
                <div className="form-group">
                  <label htmlFor='price'>Room Price ${price}</label>
                  <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'/>
                </div>
                
                <div className="form-group">
                <label htmlFor='size'>Room Size</label>   
                <div className="size-inputs">
                <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input'/>
                <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input'/>
                </div>
                </div>
                <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                </div>
                </div>
                    




            </form>
        </section>
    )
}

export default RoomsFilter
