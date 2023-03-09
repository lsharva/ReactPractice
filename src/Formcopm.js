import React, { Component } from "react";

export default class Formcomp extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:"",
            address:"",
            topic:"react"
        }
    }

    userNameChange = (e) =>{
        this.setState({
            userName: e.target.value
        })
    }

    addressChange = (e) => {
        this.setState({
            address:e.target.value
        })
    }

    topicChange = (e) =>{
        this.setState({
            topic:e.target.value
        })
    }
    render(){
        return(
             <form>
                <div>
                    <label>UserName:</label>
                    <input type="text" 
                    value={this.state.userName}
                    onChange={this.userNameChange}/>
                </div>

                <div>
                    <label>Address:</label>
                    <textarea value={this.state.address} onChange={this.addressChange}/>
                </div>

                <div>
                    <label>Topic:</label>
                    <select value={this.state.topic} onChange={this.topicChange}>
                       <option value="react">React</option>
                       <option value="node">Node</option>
                       <option value="html">Html</option>
                       <option value="css">Css</option>
                    </select>
                </div>
             </form>
        )
    }
}