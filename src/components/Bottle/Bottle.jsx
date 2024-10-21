import './Bottle.css'

const Bottle = ({bottle}) => {
    const {price, name, img} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;