import React, { Component } from "react";
import arrayData from "./db.json"
import ClassPerson from "./ClassPerson";


export default class ListingClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listData: arrayData
        }
    }

    render() {
        console.log(this.state.listData)


        return (
        <>
        
        <ClassPerson data={this.state.listData}/></>
        )
            // this.state.listData.map(e => 
            //         <div className='container'>
            //                     <div>
            //                         <h3> Hi my id is  {e.id } {""}
            //                          and My Name is {e.name } {""}
            //                          and My age is {e.age } {""}
            //                          and my role is {e.role } {""}
            //                         </h3>
        
            //                     </div>
            //                 </div> 
            //     )
            
        
       

                {/* <h1>
                    {this.state.listData.map(e => <ClassPerson datePerson={e} /> 
                      //  <div>{e.name}</div>
                        <div>
                            ClassPerson
                        </div>
                    )
                    }

                </h1> */}
        

    }
}

