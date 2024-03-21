import React, { useContext } from "react";
import'./ShopCategory.css'
 import { ShopContext } from "../../Context/ShopContext";
 import drop_down_icon from "../../assets/dropdown_icon.png";
 import Item from "../../components/Item/Item"
const ShopCategory = (props)=> {
    const {all_product}= useContext(ShopContext);
    return(
        <div className='shop-category'>
            <div className="shopcategory-indexSort">
               <p><span>Showing 1-10</span> out of 11 products</p> 
               <div className='shopcatergory-sort'>
                Sort by <img src={drop_down_icon} alt=""/>
               </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image } new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null
                    }
                })}

            </div>


        </div>
    )
}
export default ShopCategory