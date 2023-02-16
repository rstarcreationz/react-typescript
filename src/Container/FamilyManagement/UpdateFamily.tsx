import { render } from "@testing-library/react";
import React from "react";
// export const UpdateFamily = () => {
//     return <p>hello Update family</p>
// }

interface MyState {
    count: number
}

type car = string;
type model = number;

type carobject = {
    mycar : car,
    mymodal : model
}

const carname : car = "toyota";
const modelnumber: model = 12346;
const MyCar: carobject = {
    mycar: carname,
    mymodal: modelnumber
}

console.log("MyCar ....", MyCar)

export class UpdateFamily extends React.Component{

    state: MyState ={
        count: 0
    }


    render(){
        return (
            <>
            </>
        )
    }
}