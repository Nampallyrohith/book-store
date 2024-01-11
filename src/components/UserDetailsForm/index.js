import {Component} from "react"
import {Link} from 'react-router-dom'
import "./index.css"
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import CartContext from "../../context/CartContext"

class UserDetailsForm extends Component {
    render(){
        return (
            <>
                <CartContext.Consumer>
                    {
                        value => {
                            const { cartEmpty, checkout, checkoutProcess} = value 
                            return (
                                <div className = "user-form">
                                <h2> Delivery Address and Contact Info </h2>
                                <form>
                                    <label className = "user-details-form-label">Name </label> 
                                    <br/>
                                    <div className = "grid-container">
                                        <input className = "user-details-form-name-input" type= "text" required 
                                        placeholder="First Name "></input>
                                        <input className = "user-details-form-name-input" type= "text" required 
                                        placeholder="Last Name "></input>
                                    </div>
                                    <label className = "user-details-form-label">
                                        Email
                                        <br/>
                                        <input className = "user-details-form-input" type= "email" required placeholder="Email"></input>
                                    </label> 
                                    <br/>
                                    <label className = "user-details-form-label">
                                        Phone Number
                                        <br/>
                                        <input className = "user-details-form-input" type= "tel" required placeholder="Phone" pattern="[0-9]{10}"></input>
                                    </label> 
                                    <br/>
                                    <label className = "user-details-form-label">
                                        Address
                                        <br/>
                                        <input className = "user-details-form-input" type= "text" required placeholder= "Address"></input>
                                    </label>
                                    <br/>
                                    <label className = "user-details-form-label">
                                        Country
                                        <br/>
                                        <input  className = "user-details-form-input" type= "text" required></input>
                                    </label>
                                    <br/>

                                    
                                    <Popup
                                        modal 
                                        trigger={
                                            <button type="submit" className="submit-button" onClick={() => checkoutProcess()}>
                                                Submit
                                            </button>
                                            }
                                    >
                                        {
                                            checkout && 
                                            (
                                                    <>
                                                        
                                                        <div className="confirmation">
                                                            <img
                                                            src="https://res.cloudinary.com/dsfgj9nwd/image/upload/v1704543047/WhatsApp_Image_2024-01-06_at_17.37.02_uievtr.jpg"
                                                            alt="thank you"
                                                            />
                                                            <h1>Order Confirmed</h1>
                                                            <p>Thank you for Ordering</p>
                                                            <Link to="/books">
                                                            <button
                                                                type="button"
                                                                className="summary-btn"
                                                                onClick={() => cartEmpty()}
                                                            >
                                                                Continue Shopping
                                                            </button>
                                                            </Link>
                                                        </div>
                                                    </>
                                                    )
                                                }
                                        
                                    </Popup>
                                </form>
                            </div>
                            )
                        }
                    }
                </CartContext.Consumer>
            </>
        )
    }
}

export default UserDetailsForm