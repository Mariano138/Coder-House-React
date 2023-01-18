import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className=''>
            {products.map(prod => <Item className='' key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList