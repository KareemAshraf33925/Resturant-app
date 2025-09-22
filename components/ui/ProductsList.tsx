"use client"
import React, { useState } from 'react';
import { Add } from '@/context/orderSlice';
import { useDispatch } from 'react-redux';

export default function ProductsList({ allProducts }: { allProducts: any[] }) {
  const dispatch=useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  // alert model
  const [Model,setModel]=useState<boolean>(false)
  // storage-product
  const [selectProduct,setProduct]=useState<any | null>(null)
  // date
  const date:Date = new Date();
  const Time =date.getHours();
  const minutes=date.getMinutes();
  // calculate start-end
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // number of pages
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <div className='my-20  mx-8'>
      <h2 className="text-2xl font-bold mb-4 ">Fried <span className='text-red-700'>chicken</span></h2>
        <p className='font-medium text-red-700'>It is known for its delicious flavor and ability to easily absorb spices,<br/> making it suitable for various cultures and tastes.</p>
        <p className='font-medium capitalize mb-5
         text-red-700'>It is also a high-protein, low-fat option, which makes it ideal for healthy diets.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {currentProducts.map((product) => (
          <div key={product.id} className="group relative shadow-md  rounded-xl">
              <img
                alt={product.name}
                src={product.img}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              
              <div className="mt-4 flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href} className='font-bold'>
                     
                      {product.name}
                    </a>
                  </h3>
                  <p className='mt-10 font-bold'>${product.price}</p>
                 
                </div>
                <div>
                 <div className="stars flex justify-center gap-1.5">
                    <img src="/Resturant-app/assets/star.svg" alt="star" loading='lazy' />
                    <img src="/Resturant-app/assets/star.svg" alt="star" loading='lazy' />
                    <img src="/Resturant-app/assets/star.svg" alt="star" loading='lazy' />
                    <img src="/Resturant-app/assets/star.svg" alt="star" loading='lazy' />
                    <img src="/Resturant-app/assets/star.svg" alt="star" loading='lazy' />
                 </div>
                 <button className='bg-red-700 text-white font-bold py-2.5 px-10 rounded-xl 
                 mt-10 cursor-pointer
                 border-0 hover:bg-red-600'
                 onClick={()=>{
                  setProduct(product)
                  setModel(true)
                 setTimeout(()=>{
                    setModel(false)
                  },1000)
                  
                  
                  dispatch(Add(product))}}>Order</button>
                </div>
               
              </div>
              {/* modal-order-start */}

            </div>
        ))}
      </div>

      {/*button translate*/}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded  my-5 cursor-pointer ${
              currentPage === index + 1 ? 'bg-red-700 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* model-order-start */}
                    { Model === true ? (    <div
  className="fixed  inset-0 z-50 grid place-content-center  p-4"
 
  
>
  <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
    <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">Success order</h2>
    <div className='flex gap-2.5'>
      <img
      className='w-1/2 my-5'
      src={selectProduct.img} alt={selectProduct.name} loading='lazy' />
    <div className="mt-4">
      <span className='text-red-700 text-lg font-bold'> {selectProduct.name}</span>
      <p>price:${selectProduct.price}</p>
      <p>Time:{Time}:{minutes}</p>
      <p className="text-pretty text-gray-700">
        {selectProduct.dsc}
      </p>

    </div>
    </div>
  </div>
</div>):""}
          

              {/* model-order-end */}
    </div>
  );
}
