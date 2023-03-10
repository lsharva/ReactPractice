import React, { Component } from "react";
import "./Formcomp.css"



export default class Formcomp extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:"",
            address:"",
            topic:"react", 
            userEmail: "",
            userpassword: ""
        }
    }

    userEmailChange= (e)=>{
        this.setState(
{userEmail:e.target.value}            
        )
    }

    userPasswordChange = (e)=>{

        this.setState(
        {
            userpassword: e.target.value
        }
        )
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
        const style = {
            height : "30vh",
            width : "40%",
            color : "blue"
        };
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
                    <textarea value={this.state.address} onChange={this.addressChange} style={style}/>
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
<div>
    <label>EMail</label>
    <input type="email" onChange={this.userEmailChange} value= {this.userEmail} />

</div>

<div>

<label>Password</label>
<input type="Password" onChange={this.userPasswordChange} value={this.userpassword} />


</div>
<button className="button_submit" type="Submit">
    SUBMIT
</button>

             </form>
        )
    }
}