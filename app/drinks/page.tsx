import React from 'react'
import DrinksList from '@/components/ui/DrinksList';
export default async function Drinks() {
    const data= await fetch("https://free-food-menus-api-two.vercel.app/drinks",{cache:"force-cache",next:{revalidate:60}})
    const products =await data.json();
  
  return (
    <>
    <DrinksList allProducts={products} />
    </>
  )
}
