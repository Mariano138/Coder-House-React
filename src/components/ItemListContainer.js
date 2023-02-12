import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync'
import { useTitle } from '../hooks/useTitle'
import ItemList from './ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { getProducts } from '../services/firebase/firestore/products'
import '../App.css';

const ItemListContainer = ({ greeting }) => {
    useTitle('Todos los bichitos', [])

    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


    if(loading) {
        return <div className='fondo-body-check p-5'>
        <div className='fondo-items-check p-5'>
        <h1 className='d-flex justify-content-center'>Cargando...</h1>
        </div>
    </div>
        
    }

    if(error) {
        return <div className='fondo-body-check p-5'>
        <div className='fondo-items-check p-5'>
        <h1 className='d-flex justify-content-center'>Hubo un error al cargar la pagina
        </h1>
        </div>
    </div>
    }




    return (
        <div className='d-flex justify-content-center fondo-body'>
            <div className=''>
                <h1 className=''>{greeting}</h1>
                <ItemList products={products} className='' />
            </div>
        </div>
    )
}

export default ItemListContainer;