import React, { Component } from "react";
import '../Formcomp.css'

class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"krish"
        }
        console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(prevprops,prevstate){
        console.log("LifeCycleB GetDerivedStatefromprops")
        return null
    }

    shouldComponentUpdate(nextprops,nextstate){
        console.log("LigeCycleB ShouldCoponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("LifeCycleB getSnapshot")
        return null
    }

    componentDidUpdate(prevprops,prevstate,snapshotValue){
        console.log("LifeCycleB didupdate")
    }

    componentDidMount(){
        console.log("LifeCycleB componentdidmount")
    }
    render()
    {
        console.log("LifeCycleB Render")
        return(
            <h1 className="header_text">{this.state.name}</h1>
        )
    }
}

export default LifecycleB