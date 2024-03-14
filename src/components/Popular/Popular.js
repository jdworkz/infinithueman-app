import React from "react";
import './Popular.css'
import data_product from '../../assets/Data'
import Items from '../Items/Items'
const Popular =()=>{
    return(
        <div className="popular">
            <h1>Popular Items</h1>
            <hr/>
            <div className="popular item">
                {data_product.map((Items,i) =>{
                    return <Items key={i} id={Items.id} name={Items.name} image={Items.image} new_price={Items.new_price} old_price={Items.old_price}/>
                })}
            </div>

        </div>
    )
}
export default Popular