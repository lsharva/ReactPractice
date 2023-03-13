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


    userhandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
          ...this.state,
          [name] : value
        })
    } 
//     userEmailChange= (e)=>{
//         this.setState(
// {userEmail:e.target.value}            
//         )
//     }

//     userPasswordChange = (e)=>{

//         this.setState(
//         {
//             userpassword: e.target.value
//         }
//         )
//     }

//     userNameChange = (e) =>{
//         this.setState({
//             userName: e.target.value
//         })
//     }

//     addressChange = (e) => {
//         this.setState({
//             address:e.target.value
//         })
//     }

//     topicChange = (e) =>{
//         this.setState({
//             topic:e.target.value
//         })
//     }

    handleSubmit = (e) => {

       e.preventDefault()
        console.log("inside submit")
        console.log(`${this.state.userName} ${this.state.address} ${this.state.topic} ${this.state.userEmail} ${this.state.userpassword}`)
    }
    render(){
        const style = {
            height : "10vh",
            width : "40%",
            color : "blue"
        };
        return(
            <div>

            
             <form onSubmit={this.handleSubmit}>
                <div>
                    <label className="form-label" >UserName:</label>
                    <input type="text" 
                    name="userName"
                    value={this.state.userName}
                    onChange={this.userhandleChange}/>
                
                </div>
                
                <div>
                    <label>Address:</label>
                    <textarea name="address" value={this.state.address} onChange={this.userhandleChange} style={style}/>
                </div>

                <div>
                    <label>Topic:</label>
                    <select name="topic" value={this.state.topic} onChange={this.userhandleChange}>
                       <option value="react">React</option>
                       <option value="node">Node</option>
                       <option value="html">Html</option>
                       <option value="css">Css</option>
                    </select>
                </div>
<div>
    <label>EMail</label>
    <input name="userEmail" type="email" onChange={this.userhandleChange} value= {this.state.userEmail} />

</div>

<div>

<label>Password</label>
<input name="userpassword" type="Password" onChange={this.userhandleChange} value={this.state.userpassword} />


</div>
<button className="button_submit" type="Submit">
    SUBMIT
</button>

             </form>
             <div>
                    <hr/><hr/>
                     <h1>Data from Form</h1>
                     <h5>{this.state.userName}</h5>
                     <h5>{this.state.address}</h5>
                     <h5>{this.state.topic}</h5>
                     <h5>{this.state.userEmail}</h5>
                     <h5>{this.state.userpassword}</h5>
             </div>

             </div>
        )
    }
}