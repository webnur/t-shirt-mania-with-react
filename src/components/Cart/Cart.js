import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h1>Order Summery</h1>
            <p>total product: {cart.length}</p>

            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;