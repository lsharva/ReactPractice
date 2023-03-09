import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
import "../Formcomp.css"

class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"karan"
        }
        console.log("LifeCycleA Constructor")

    }
    static getDerivedStateFromProps(prevprops,prevstate){
        console.log("LifeCycleA GetDerivedStatefromprops")
        return null
    }

    shouldComponentUpdate(nextprops,nextstate){
        console.log("LigeCycleA ShouldCoponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("LifeCycleA getSnapshot")
        return null
    }

    componentDidUpdate(prevprops,prevstate,snapshotValue){
        console.log("LifeCycleA didupdate")
    }

    componentDidMount(){
        console.log("LifeCycleA componentdidmount")
    }

    changeName = ()  =>{
        this.setState({
            name : "raj"
        })
    }
    render()
    {
        console.log("LifeCycleA Render")

        return(
            <div>
                  <h1>{this.state.name}</h1>
                  <button onClick={this.changeName}>Chnage</button>
                  <LifecycleB/>
                  <h1>"Check the Changes in Git "</h1>
            </div>
          
        )
    }
}

export default LifecycleA