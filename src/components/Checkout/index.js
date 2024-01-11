import {Component} from "react"
import { FaArrowLeft } from "react-icons/fa";

import UserDetailsForm from "../UserDetailsForm";
import Header from '../Header'

import "./index.css"
import CartContext from "../../context/CartContext";



class Checkout extends Component {
    render(){
        return (
            <CartContext.Consumer>
                {
                    value => {
                        const {cartList} = value
                        let totalPrice = 0
                        cartList.forEach(list => {
                            totalPrice += parseFloat(list.price.slice(1))
                        })
                        return (
                            <>
                                <div className="checkout-page-container">
                                    <Header />
                                    <div className = "checkout-form">
                                        <div className = "checkout-content-container">
                                            <h1 className = "checkout-heading">Checkout</h1>
                                            <button className = "back-button">
                                                <FaArrowLeft className = "back-icon"/>
                                            </button>
                                            <div className = "form-and-summary">
                                                <UserDetailsForm/>
                                                <div className = "summary-container">
                                                {
                                                    cartList.map(eachList => (
                                                        <div key={eachList.isbn13} >
                                                            <div className = "summary-item-container">
                                                                <img src={eachList.image} alt={eachList.image} className="summary-item-image" />
                                                                <p className="summary-item-title">{eachList.title}</p>
                                                                <p className="summary-item-price">{eachList.price}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <div className = "summary-item-container">
                                                    <p className="summary-total-title">Total</p>
                                                    <p className="summary-total-price">${totalPrice}</p>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>                                    
                                </div>
                            </>
                        )
                    }
                }
            </CartContext.Consumer>

        );
    }
}

export default Checkout