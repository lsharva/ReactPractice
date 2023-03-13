import React from 'react';

export default function Listing() {

    const persons = [
        {
            id: 1,
            name: "Karan",
            age: "22",
            role: "user",


        },

        {
            id: 2,
            name: "Kiran",
            age: "29",
            role: "admin",


        },
        {
            id: 3,
            name: "KarOna",
            age: "45",
            role: "user",


        },

        {
            id: 4,
            name: "Karen",
            age: "50",
            role: "admin",


        }
    ]

    // const arr = ['krish' , 'karan' , 'raj']


    return (
        //  arr.map(names => <h1>{names}</h1>)
        persons.map(person =>
            <div className='container'>
                <div>
                    <h3> `Hi my id is  {person.id } {""}
                     and My Name is {person.name } {""}
                     and My age is {person.age } {""}
                     and my role is {person.role } {""}
                    </h3>

                </div>
            </div>
        )

    )


}