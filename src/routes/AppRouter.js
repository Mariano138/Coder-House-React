import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import Cart from '../components/Cart'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos nuestros bichitos' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bichitos filtrados' />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default AppRouter