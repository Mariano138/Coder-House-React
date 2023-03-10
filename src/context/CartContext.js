import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => {
                console.log(prev)
                return [...prev, productToAdd]
            })
        } else {
            alert('Bichito ya agregado!')
        }
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }


    const totalQuantity = getTotalQuantity()

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}