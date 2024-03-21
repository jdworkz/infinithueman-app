import React, { useContext } from "react";
import{ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from "../components/Breadcrums/BreadCrum";
import DisplayProduct from "../components/DisplayProduct/DisplayProduct";


export default function Products() {
  const{all_product}= useContext(ShopContext)
  const {productId}= useParams();
  const product=all_product.find((e)=> e.id === Number(productId))
    return( 
    <div>
   <Breadcrum product={product}/>
   <DisplayProduct product={product}/>
</div>
    )
  }