import React from 'react'
import {SecondComponent} from "./SecondComponent";

type NewComponentType = {
    //students:StudentType[]
    title: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <ul>
            {props.title.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
            <SecondComponent task={topCars}/>

        </ul>
    )
}