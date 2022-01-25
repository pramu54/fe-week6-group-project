import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderList = () =>{
    const [orderId, setOrderId] = useState<any>([]);
    const [orderStatus, setOrderStatus] = useState<any>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        await axios
        .get("/order")
        .then((res)=>{
            const { data } = res;
            // setOrderId(data)
            console.log(data);
            
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <div className="card">
                        <div className="card-header">
                            <h4>Order Lists</h4>
                        </div>
                            {/* {cards.map((item)=>(
                                <Card
                                key={item.id}
                                title={item.content}
                                finished={item.completed}
                                loading={isLoading}
                                onClickDetail={()=>handleDetails(item)}
                                onClickDelete={() => handleDelete(item)}
                                onClickEdit={()=>handleEdit(item)}
                                onClickCompleted={()=>handleCompleted(item)}
                                />
                            ))} */}
                    </div>
        </div>
    )
}

export default OrderList