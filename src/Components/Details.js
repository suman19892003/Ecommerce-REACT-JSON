import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";


class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {(value)=>{
                    const {id,title,company,imgUrl,price,inCart,info}=value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                                </div>  
                            </div>
                            {/* End Title */}
                            {/*Product Info */}
                            <div className="row">
                                {/*Product Image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={imgUrl} className="img-fluid" alt="Product"/>
                                </div>
                                {/*End Product Image */} 
                                {/*Product Text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase
                                    text-muted mt-3 mb-2">
                                    Made By: <span className="text-uppercase">
                                        {company}
                                    </span>
                                    </h4>
                                    <h4 className="text-blue">
                                    <strong>
                                        Price : <span>$</span>{price}
                                    </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Some Info About Product:
                                    </p>
                                    <p className="text-muted lead">
                                    {info}
                                    </p>
                                    {/*Button */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Back To Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart?'in Cart':'Add To Cart'}
                                        </ButtonContainer>
                                    </div>
                                    {/* End Button */}
                                </div> 
                            </div>
                            {/* End Product Info */}
                        </div>
                    )
                }}
            </ProductConsumer>
         );
    }
}
 
export default Details;