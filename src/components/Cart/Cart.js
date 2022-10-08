import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>please buy at least one item!!!! </p>
    }else if(cart.length === 1){
        message = <div>
            <p>amar jonno akta nao</p>
            <p>tumar jonno arekta nao</p>
            <p><small>amar jonno arekta nao</small></p>
        </div>
    }
    else {
        message = <p>Thanks for Buying!!!</p>
    }
    return (
        <div>
            <h1 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summery</h1>
            <p className={`bold ${cart.length ===2 ?'bule': 'purple'}`}>total product: {cart.length}</p>

            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            <p>ternary operator</p>
            {cart.length === 3 ? <p>tinta kinba???</p> : <p>kino kino</p>}
            <p>and operator</p>
            {cart.length === 2 && <h2>Double Item</h2>}
            <p>OR Operator</p>
            {cart.length ===4 || <p>charta nah</p>}
        </div>
    );
};

export default Cart;


/* 
Conditional Rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true : false 
3. && operator (if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
*/