import React from 'react'
import { useContext, useState } from 'react'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../services/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const [datos, setDatos] = useState({
        nombre: '',
        email: ''
    })

    const handeInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const navigate = useNavigate()


    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: 'Mariano Aguero',
                    phone: '9999',
                    email: 'agueromariano138@gmail.com'
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            console.log(ids)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))


            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                console.log(id)
            } else {
                console.error('..')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }

    if (loading) {
        return <div className='fondo-body-check p-5'>
            <div className='fondo-items-check p-5'>
                <h1 className='d-flex justify-content-center'>Ya casi los bichitos son tuyos!</h1>
            </div>
        </div>
    }

    if (orderId) {
        return (
            <div className='fondo-body-check p-5'>
            <div className='fondo-items-check p-5'>
            <h1 className='d-flex justify-content-center'>Hola {datos.nombre}, el ID de su compra es: {orderId}, el mismo te fue enviado a {datos.email} que disfrute sus bichitos!</h1>
            </div>
        </div>
        
        )
    }

    if (cart.length === 0) {
        return (
            
            <div className='fondo-body-check p-5'>
            <div className='fondo-items-check p-5'>
            <h1 className='d-flex justify-content-center'>No hay bichitos en el carrito </h1>
            </div>
        </div>
        )
    }

    return (
        <div className='fondo-body-check p-5'>
            <div className='fondo-items-check p-5'>
                <h1 className=' d-flex justify-content-center'>Comprar</h1>
                <div className='d-flex justify-content-center '>
                    <form action="" className=''>
                        <label htmlFor="" className=''>Nombre</label>
                        <input type="text" name='nombre' className='' placeholder='Ingrese su nombre' onChange={handeInputChange} />
                        <label htmlFor="" className='px-2'>E-mail</label>
                        <input type="email" name='email' className='' placeholder='Ingrese su e-mail' onChange={handeInputChange} />
                        <label htmlFor="" className='px-2'>Celular</label>
                        <input type="number" className='' placeholder='Ingrese su celular' />
                        <button type='submit' onClick={createOrder} className='btn btn-success mx-4 rounded p-2 cursor-pointer'>Comprar</button>
                    </form>
                </div>
            </div>
        </div>
    )


}




export default Checkout