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
        <div className=''>
            <div className=''>
                <button className=' ' onClick={decrement}>-</button>
                <h4 className=''>{quantity}</h4>
                <button className=' ' onClick={increment}>+</button>
            </div>
            <div>
                <button className='' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount