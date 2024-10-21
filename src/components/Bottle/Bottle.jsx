import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {price, name, img} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;