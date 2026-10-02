// TODO: Imprimir los datos del producto(ej. title, descripción, price, thumbnail y marca) en el return de este producto
// https://dummyjson.com/products
import { useState, useEffect } from 'react'

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Marca: {product.brand}</p>
          <p>Precio: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage