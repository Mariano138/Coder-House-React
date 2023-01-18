import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


    if (loading) {
        return <h1>Cargando productos...</h1>
    }



    return (
        <div className=''>
            <div className=''>
                <h1 className=''>{greeting}</h1>
                <ItemList products={products} className='' />
            </div>
        </div>
    )
}

export default ItemListContainer;