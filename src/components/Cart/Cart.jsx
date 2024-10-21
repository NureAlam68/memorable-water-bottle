import './Cart.css'
import PropTypes from 'prop-types'; 

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;