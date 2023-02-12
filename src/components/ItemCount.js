import React, { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <div className='d-flex'>
            <div className='d-flex'>
                <button className='btn btn-danger m-2' onClick={decrement}>-</button>
                <h4 className='m-2'>{quantity}</h4>
                <button className='btn btn-primary m-2' onClick={increment}>+</button>
            </div>
            <div>
                <button className='btn btn-success m-2' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount