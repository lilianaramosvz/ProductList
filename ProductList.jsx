//ProductList.jsx

import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Café", price: 50 },
        { id: 2, name: "Té", price: 30 },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {
        products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => alert(`Agregado ${product.name}`)}>
                Agregar al carrito
              </button>
            </div>
          ))
        )
      }
    </div>
  );
}

export default ProductList;



