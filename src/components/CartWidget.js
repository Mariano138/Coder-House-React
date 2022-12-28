import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
    return (
        <li>
            <div className='d-flex'>
                <FiShoppingCart className=''/>
                <p className=''>0</p>
            </div>
        </li>
    )
}

export default CartWidget;