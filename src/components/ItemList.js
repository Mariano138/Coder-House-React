import { memo } from 'react';
import React from 'react';
import Item from './Item';
import '../App.css';

const ItemList = ({ products }) => {
    return (
        <container className='d-flex fondo-items'>
            <div className='row'>
                
            {products.map(prod => <Item className='' key={prod.id} {...prod} />)}
            </div>
        </container>
    )
}

export default memo(ItemList)
