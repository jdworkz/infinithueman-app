import React,{createContext} from "react";
import all_product from "../assets/All_Products";

export const ShopContext = createContext(null);

const ShopContextProvider= (props)=>{
    const contextValue={all_product};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider