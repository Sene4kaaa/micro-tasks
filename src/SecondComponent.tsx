import React from 'react'

type SecondComponentType = {
    task: Array<CarsType>
}
type CarsType = {
    manufacturer: string,
    model: string
}

export const SecondComponent = (props: SecondComponentType) => {
    return (
        <>

            {props.task.map((el) => {
                return (
                    <table>
                        <tr>
                            <th>{el.manufacturer}</th>
                        </tr>
                        <tr>
                            <td>{el.model}</td>
                        </tr>
                    </table>
                )
            })}
        </>
    )
}