import React from 'react'

function ChooseUs() {
  return (
    <>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-8">
       <div>
        <img
          src="/Resturant-app/assets/food.jpg"
          className="rounded w-4/5"
          alt="food"
          loading='lazy'
        />
      </div>
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-6xl font-bold text-gray-900 sm:text-3xl">
           Why Peoples Choose Us? 
          </h2>

         <div className='flex justify-start items-center shadow-md p-3.5 gap-5 mt-8 rounded-lg'>
            <img src="/Resturant-app/assets/delvery.svg" alt="delvery" loading='lazy' className='shadow-md
            rounded-full p-2.5' />
            <div>
                <h3 className='font-medium text-2xl'>Convenient and Reliable</h3>
                <p>Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.</p>
            </div>
         </div>
         <div className='flex justify-start items-center shadow-md p-3.5 gap-5 mt-8 rounded-lg'>
            <img src="/Resturant-app/assets/menue.svg" alt="menue" loading='lazy' className='shadow-md
            rounded-full p-2.5' />
            <div>
                <h3 className='font-medium text-2xl'>Variety of Options</h3>
                <p>From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
            </div>
         </div>
          <div className='flex justify-start items-center shadow-md p-3.5 gap-5 mt-8 rounded-lg'>
            <img src="/Resturant-app/assets/burger.svg" alt="burger" loading='lazy' className='shadow-md
            rounded-full p-2.5' />
            <div>
                <h3 className='font-medium text-2xl'>Eat Burger</h3>
                <p>Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
            </div>
         </div>
        </div>
      </div>

     
    </div>
  </div>
</section>

    </>
  )
}

export default ChooseUs