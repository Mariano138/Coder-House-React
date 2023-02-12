import { Link } from 'react-router-dom'
import  '../App.css';


const Item = ({ id, name, img, price }) => {
    return (
        <div  className='card col-3 p-0 m-5'>
        
            <div className='div-img rounded-3' >
                <img src={img} alt={name} className='card-img-top' />
            </div>
            <div className='card-body d-flex justify-content-center flex-column'>

                <h2 className='card-title d-flex justify-content-center'>{name}</h2>
                
                <p className='card-text d-flex justify-content-center'>Precio: ${price}</p>
    
                <Link to={`/detalle/${id}`} className='btn btn-primary'>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item