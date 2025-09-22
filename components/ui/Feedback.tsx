import React from 'react'

export default function Feedback() {
  return (
    <>
    <section >
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div className='flex-col justify-start items-center'>
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
           Customer <span className='text-red-700'>Feedback</span> 
          </h2>

          <p className="mt-4 text-gray-700">
           I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.
          </p>
          <div className='flex justify-between items-center mt-5'>
            <div className='flex justify-center items-center gap-2.5'>
                <img src="/Resturant-app/assets/tyepe.png" alt="customer feedback" loading='lazy' />
                <div>
                    <h3 className='text-red-700'>Tayyab Sohail</h3>
                    <p>UX/UI Designer</p>
                </div>
            </div>
            <div className='flex gap-1 justify-center items-center'>
                <span className='w-2.5 h-2.5 border-2 border-red-700 rounded-full'></span>
                <span className='w-2.5 h-2.5 border-2 border-red-700 rounded-full bg-red-700'></span>
                <span className='w-2.5 h-2.5 border-2 border-red-700 rounded-full'></span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/Resturant-app/assets/cheife-man.jpg"
          className="rounded"
          alt="chief-man"
          loading='lazy'
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}
