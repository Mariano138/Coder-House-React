const products = [
    { id: '1', name: "Conejos", category: "conejos",  price: 1500, img: "https://www.centroveterinariobarbanza.es/manejo-y-comportamiento_img8825t1.jpg", stock: 15 },
    { id: '2', name: "Cerdos", category: "cerdos", price: 9000, img: "https://www.worldanimalprotection.cr/sites/default/files/styles/600x400/public/media/1015230_3.jpg.webp?itok=1Zj6sL_U", stock: 15 },
    { id: '3', name: "Chivos", category: "chivos", price: 8500, img: "https://raicesdeperaleda.com/recursos/diccionario/130aa7d73632c5b113ae1f7c829d6269.jpg", stock: 15 },
    { id: '4', name: "Pollos", category: "pollos", price: 800, img: "https://ecoinventos.com/wp-content/uploads/2020/04/Pollitos.jpg", stock: 15 }
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 750)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 750)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 750)
    })
}