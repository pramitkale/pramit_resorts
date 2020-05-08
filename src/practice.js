import React, { Component } from 'react'


class practice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"pramit"
        }
    }
    
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
        console.log(this.state.username)
    }
    
    render() {
        return (
            <form>
            <div>
                <label>username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
            </div>


            </form>
        )
    }
}

export default practice

