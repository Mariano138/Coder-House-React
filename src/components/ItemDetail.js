import ItemCount from '../components/ItemCount'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        console.log(`Agregué al carrito: ${quantity} ${name}`)
    }

    return (
        <div className=''>
            <div className=''>
                <h2 className=''>{name}</h2>
            </div>
            <div className=''>
                <img src={img} alt={name} className=''/>
            </div>
            <div>
                <p className=''>Categoria: {category}</p>
                <p className=''>Descripción: {description}</p>
                <p className=''>Precio: ${price}</p>
            </div>
            <div>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail