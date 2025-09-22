 function Hero(){
  
    return(<>
    {/* start-hero */}
        <section className=" bg-linear-to-r  from-orange-300 from-10%   via-white via-60%  to-orange-300
        py-5">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-center items-center gap-8 my-12 md:flex-row md:gap-8 ">
     {/* start-desire */}
      <div className="flex flex-col gap-10">
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Desire <span className="bg-linear-to-r from-orange-400 to-orange-400
            -rotate-45 -translate-y-8
             rounded-full w-28 h-14 inline-block
             text-center leading-12 ">food</span><br/> for Your Taste
          </h2>

          <p className="mt-4 font-bold
          ml-0 mr-0
          md:mr-52
          ">
           Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains..
          </p>
        </div>
        <button className='text-white bg-red-800 border-red-800 border-2 w-36 h-10  rounded-full font-bold
    cursor-pointer'>Order Now</button>
  
      </div>
      {/* end-desire */}
      {/* start-information-detials */}
      <div className="relative ">
        <img
          src="/Resturant-app/assets/chefie-wommen.png"
          className="rounded  w-9/12"
          alt="chefie-wommen"
          loading="lazy"
        />
        <div className="delivery bg-white w-auto  px-5 py-2.5
        rounded-2xl
        absolute 
        top-0
        left-52
        md:top-0
        md:-left-20
        flex gap-2 shadow-lg
        ">
            <img src="/Resturant-app/assets/rocket-icon.png" alt="rocket" loading="lazy" />
            <div className="">
                <h4>Delivery</h4>
                <span>in 30 mint</span>
            </div>
        </div>
        <div className="location bg-white w-auto  px-5 py-2.5
        rounded-2xl
        absolute -bottom-3
        -right-3
        flex gap-2 shadow-lg">
            <img src="/Resturant-app/assets/location.png" alt="location" loading="lazy" />
            <div className="">
                <h4>Location</h4>
                <span>at destination</span>
            </div>
        </div>
        <div className="likes bg-white w-auto  px-5 py-2.5
        rounded-2xl
        absolute -bottom-20
        -left-2.5
        md:-left-44 
        md:bottom-1
        flex gap-2 shadow-lg">
            <img src="/Resturant-app/assets/ali.png" alt="ali" loading="lazy" />
            <div className="">
                <h4 className="flex gap-1.5">
                    <img src="/Resturant-app/assets/star.svg" alt="star" loading="lazy" />
                    4.5
                </h4>
                <span className="flex gap-1.5">
                    <img src="/Resturant-app/assets/heart.svg" alt="heart" loading="lazy" />
                    1k likes
                </span>
            </div>
        </div>
      </div>
      {/* end-informatio-detials */}
    </div>
  </div>
</section>

        </>)
}
export default Hero;