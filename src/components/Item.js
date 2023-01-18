import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <div  className=''>
            <div className=''>
                <h2 className=''>{name}</h2>
            </div>
            <div>
                <img src={img} alt={name} className='' />
            </div>
            <div className=''>
                <p className=''>Precio: ${price}</p>
            </div>
            <div className=''>
                <Link to={`/detalle/${id}`} className=''>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item