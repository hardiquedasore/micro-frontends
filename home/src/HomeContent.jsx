import React, {useState, useEffect} from 'react'
import {currency, getProducts} from "./products"

function HomeContent() {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        getProducts().then(setProducts);
    },[])
  return (
    <div className='my-10 grid grid-cols-4 gap-5'>
        {products.map((product)=>(
 <a key={product.id} href="#" className="block mb-8">
 <img
   alt={product.name}
   src={product.image}
   className="object-cover w-full -mt-3 h-60 aspect-square rounded-xl"
 />

 <h5 className="mt-4 text-sm text-black/90">
   {product.description}
 </h5>

 <div className="flex items-center justify-start mt-4 font-bold">
   <p className="text-lg">{currency.format(product.price)}</p>
 </div>
</a>   
        )
        )}
    </div>
  )
}

export default HomeContent