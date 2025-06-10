import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Component/ProductCard';

function Home() {

  const products = useSelector((state) => state.product.products);

  return (
    <div className='h-full bg-slate-300 flex-wrap gap-11 p-5 flex ml-28'>

      {
      products.map((product) => {
      return <ProductCard key={product.id} image={product.image} title={product.title} price={product.price}/>    
    }
      )}
    </div>

  );
}

export default Home;