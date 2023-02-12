import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (

        <div className='fondo-body-check p-5'>

            <div className='fondo-items-check p-5'>
                <h1 className='d-flex justify-content-center'>Carrito</h1>
                <div className=''>
                    {
                        cart.map(prod => {
                            return (
                                <h2 className='d-flex justify-content-center' key={prod.id}>- {prod.name}, Cantidad: {prod.quantity}</h2>
                            )
                        })
                    }
                    <div className='d-flex justify-content-center'>
                        <Link to='/checkout' className='btn btn-success'>Comprar</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CartContainer