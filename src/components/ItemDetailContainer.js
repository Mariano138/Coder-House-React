import { useState, useEffect } from 'react'

import ItemDetail from '../components/ItemDetail'

import { getDoc, doc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import { db } from '../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        document.title = 'Detalles'
    }, [])

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const dataProduct = doc.data()
            const productAdapted = { id: doc.id, ...dataProduct }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return <div className='fondo-body-check p-5'>
            <div className='fondo-items-check p-5'>
            <h1 className='d-flex justify-content-center'>Cargando productos...</h1>
            </div>
        </div>
        
    }

    return (
        <div className='fondo-body' >
            
            <div className='pt-1'>
                <ItemDetail {...product} className=''/>
            </div>
        </div>
    )
}

export default ItemDetailContainer