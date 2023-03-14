import React from "react";

export default function ClassPerson({ data }) {

    const Data_1 = data.map((e,index) => {
        return (
            <h3>{index} Hi my id is  {e.id} {""}
                and My Name is {e.name} {""}
                and My age is {e.age} {""}
                and my role is {e.role} {""}
            </h3>

        )
    }
    )


    return (

        <div className="container" >
            {Data_1}

        </div>
    )



}
