import React from "react";
import'./DisplayProduct.css';
import star_dull from "../../assets/star_dull_icon.png";
import star_icon from "../../assets/star_icon.png"
const DisplayProduct = (props)=>{
    const {product}=props;
    return(
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                <img className='productdisplay-main-img'src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull} alt=""/>
                <p>(122)</p>

                </div>
                <div className='productdisplay-right-prices'>
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </div>
                    <div className= "productdisplay-right-discription">
                        something will go here.
                    </div>
                    <div className="productdisplay-right-quantity">
                        <h1>Select Quantity</h1>
                        <div className="productdisplay-right-quantity">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                        </div>

                    </div>
                    <button>ADD To Cart</button>
                    

                </div>

            </div>

        </div>
    )
}
export default DisplayProduct