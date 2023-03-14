import React from "react";

export default function KeyListing(){
    const arr = ['krish' , 'karan' , 'raj','krish']

    return (
         arr.map((names,index) => <h1>{index} {names}</h1>)
    )
}