import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="bg-linear-to-r from-white from-40% to-orange-300">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
    
    <div className="lg:flex lg:items-start lg:gap-8">
      <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16 ">
        
        <div className="col-span-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Join Our <span className='text-red-700'>Newsletter</span></h2>

            <p className="mt-4 text-gray-500">
              Be the first to know about our latest updates, exclusive offers, and more.
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end ">
          <form className="w-full">
            <label htmlFor="UserEmail" className="sr-only"> Email </label>

            <div
              className="p-2 sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Enter your email address"
                className="w-full py-2.5 px-3.5
                border border-red-700 rounded-2xl
                focus:border-transparent focus:ring-transparent sm:text-sm"
              />

              <button
                className="mt-1 w-full bg-red-700 px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0
                  border border-red-700 rounded-2xl"
              >
                subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-bold text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-bold text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-bold text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-bold text-gray-900">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Hiring-3 Statistics
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-bold text-gray-900">Downloads</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Marketing Calendar </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Infographics </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div className="mt-8 border-t border-red-700 pt-8">
      
    </div>
  </div>
</footer>

    </>
  )
}
