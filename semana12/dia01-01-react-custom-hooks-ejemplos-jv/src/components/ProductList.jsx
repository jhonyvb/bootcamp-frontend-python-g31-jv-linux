// TODO: Listar los productos(title, description, thumbnail) de la siguiente rest api: https://dummyjson.com/products. Usando un useState, useEffect.

import { useEffect, useState } from "react"

const ProductList = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => { // Retorna una promesa
    const response = await fetch('https://dummyjson.com/products')

    return await response.json()
  }

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return (
    <div className="bg-amber-100 p-4">
      <h2 className="text-2xl text-center py-4">Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li>
              <h4 className="font-medium">{product.title}</h4>
              <p className="font-light">{product.description}</p>
              <img src={product.thumbnail} />
            </li>
          )
        })}
      </ul>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </div>
  )
}

export default ProductList

















// import { useState, useEffect } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       {products.map((product) => (
//         <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//           <img src={product.thumbnail} alt={product.title} width="100" />
//           <h3>{product.title}</h3>
//           <p>{product.description}</p>
//           <p>{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;