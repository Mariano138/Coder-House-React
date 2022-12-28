const ItemListContainer = ({ greeting }) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1 className='d-flex'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;