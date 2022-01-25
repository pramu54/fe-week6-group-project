import React from "react";

interface Props {
    image: string
    title: string
    price: number
    qty: number
    increaseQty: any
    decreaseQty: any
    delete: any
}

const Card = (props: Props) => {

    return(
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.title}
                    
                </li>
            </ul>
    )
}