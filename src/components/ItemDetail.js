import { useContext } from 'react'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { NotificationContext } from '../notification/NotificationService'
import '../App.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        
        addItem({ id, name, price, quantity })
        setNotification('error', `Se agregó correctamente ${quantity} ${name} al carrito`, 5)
    }

    return (
        <div className='fondo-items-cart card'>
            <div className='d-flex justify-content-center'>
                <h2 className=''>{name}</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <img src={img} alt={name} className='card-img-top-check w-50'/>
            </div>
            <div className='card-body'>
                <p className='d-flex justify-content-center'>Categoria: {category}</p>
                <p className='d-flex justify-content-center'>Descripción: {description}</p>
                <p className='d-flex justify-content-center'>Precio: ${price}</p>
            </div>
            <div className='d-flex justify-content-center'>
                {
                    isInCart(id) ? (
                        <Link className='btn btn-primary mb-5' to='/cart'>Ir a pagar</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail