import products from '../data/mockData';

/**
 * @returns {Promise<Array>} Una promesa que resuelve con todos los productos.
 */
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500); // Retraso de 0.5 segundos
    });
};

/**
 * @param {string} productId El ID del producto a buscar.
 * @returns {Promise<Object>} Una promesa que resuelve con el producto encontrado.
 */
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

/**
 * @param {string} categoryId La categoría por la cual filtrar.
 * @returns {Promise<Array>} Una promesa que resuelve con los productos filtrados.
 */
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};