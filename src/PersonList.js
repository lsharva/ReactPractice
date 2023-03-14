import React from 'react'

export default function PersonList(props){
    console.log(props)
    

    return(
        <div className='container'>
                     <div>
                         <h3> Hi my id is  {props.listofperson.id } {""}
                          and My Name is {props.listofperson.name } {""}
                          and My age is {props.listofperson.age } {""}
                          and my role is {props.listofperson.role } {""}
                         </h3>
                     </div>
                 </div>
    )
}
