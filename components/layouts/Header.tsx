import React from 'react'
import Link from 'next/link'
// identifcation props
type navProps={
        id:number;
        name?:string;
        icon?:React.ReactNode;
        link:string;
}[]
export default function Header() {
    const Nav:navProps=[{
        id:1,
        name:"Home",
        link:"/"
    },
     {
        id:3,
        name:"Foods",
        link:"/foods"
    },
    {
     id:4,
        name:"Drinks",
        link:"/drinks"
    },
   
    {
        id:5,
        name:"Contact Us",
        link:"/contactus"
    },
    {
        id:6,
        icon:<i className='fa-solid fa-basket-shopping '></i>,
        link:"/orders"
    }

]
  return (
    <>
    {/* start-header */}
    <header className='flex flex-col items-center 
    shadow-md justify-center
    px-5 py-5 gap-5
    bg-linear-to-r  from-orange-300 from-10%   
    via-white via-60%  to-orange-300 
    md:justify-between md:flex-row md:px-10
    '>
    <div className='flex gap-4 justify-center items-center'>
        <img src="/Resturant-app/assets/logo.png" alt="logo" loading='lazy' />
        <p className='text-red-700 text-2xl font-bold'>foo<span className='text-orange-400'>die</span></p>
    </div>
    <ul className="list flex justify-center items-center gap-5 md:gap-10">
        {Nav.map((nav)=>(
            <li className="list-items" key={nav.id}>
            <Link href={nav.link} className='list-link hover:text-red-700 transition-all
            pb-1
            hover:border-b-2 border-b-red-700 
            font-bold'>
                {nav.name}
                {nav.icon}
            </Link>
        </li>
        ))}
        
    </ul>
    <button className='text-red-700 border-red-700 border-2 w-28 h-10 bg-transparent rounded-full font-bold
    cursor-pointer'>login</button>
    </header>
    {/* end-header */}
    </>
  )
}
