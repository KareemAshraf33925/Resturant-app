import React from 'react'
import ProductsList from '@/components/ui/ProductsList';
export default async function Foods() {
    const data= await fetch("https://free-food-menus-api-two.vercel.app/fried-chicken",{cache:"force-cache",next:{revalidate:60}})
    const products =await data.json();
  
  return (
    <>
    <ProductsList allProducts={products} />
    </>
  )
}
