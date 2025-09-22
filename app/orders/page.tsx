"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Delete, increament, decreament, Remove } from '@/context/orderSlice';

export default function Orders() {
  // get order
  const order = useSelector((state: any) => state.orders.order);
  // dispatch action
  const dispatch = useDispatch();
  // number of orders
  const numOrder = order.length;
  // totail-price
  const totalPrice = order.reduce((total: number, item: any) => total + (item.count * item.price), 0);
// information-customer
  const [orderSend, setOrderSend] = useState<{ name: string, number: string, location: string }>({
    name: "",
    number: "",
    location: ""
  });
// model
  const [Model, setModel] = useState<boolean>(false);
// date
  const date = new Date();
  const time = date.getHours();
  const minutes = date.getMinutes();

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2 my-12 md:flex-row  mx-5'>

        {/* Cart Section */}
        <div className="relative w-full md:w-1/2 border-0 bg-white my-16 shadow-md px-4 py-8 sm:px-6 lg:px-8">
          <h2 className='text-red-700 capitalize text-2xl font-bold'>
            Cart <i className='fa-solid fa-basket-shopping'></i>
          </h2>

          <div className="mt-4 space-y-6">
            <ul className="space-y-4">
              {order.map((item: any, index: number) => (
                <li className="flex items-center gap-4" key={index}>
                  <img src={item.img} alt={item.name} className="size-16 rounded-sm object-cover" />
                  <div>
                    <h3 className="text-sm text-gray-900">{item.name}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Price:</dt>
                        <dd className="inline">${item.price * item.count}</dd>
                      </div>
                      <div>
                        <dt className="inline">Country:</dt>
                        <dd className="inline">{item.country}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form className='flex gap-2' onSubmit={(e) => e.preventDefault()}>
                      <button className='px-3.5 py-1 bg-red-700 text-white font-bold hover:bg-red-600'
                        onClick={() => dispatch(decreament(item))}>-</button>
                      <label>{item.count}</label>
                      <button className='px-3.5 py-1 bg-red-700 text-white font-bold hover:bg-red-600'
                        onClick={() => dispatch(increament(item))}>+</button>
                    </form>
                    <button className="text-gray-600 transition hover:text-red-600 "
                      onClick={() => dispatch(Delete(item))}>
                      <span className="sr-only">Remove item</span>
                      🗑
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <span className='block font-bold my-4'>Total Price: ${totalPrice}</span>
            <div className="space-y-4 text-center">
              <button className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 hover:ring-1 hover:ring-gray-400">
                View my cart ({numOrder})
              </button>
              <button
                onClick={() => setModel(true)}
                className="block rounded-sm bg-red-700 px-5 py-3 text-sm text-white font-bold hover:bg-gray-600">
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className='shadow-md grid grid-col-1 w-1/2 my-16 p-10 w-full md:w-1/2'>
        <h2 className='text-red-700 font-bold text-2xl my-5'>Customer Information</h2>
          <input type="text" placeholder='User Name'
            className='border mb-5 border-red-700 rounded-xl py-2.5 px-3'
            onChange={(e) => setOrderSend({ ...orderSend, name: e.target.value })}
          />
          <input type="text" placeholder='Location'
            className='border mb-5 border-red-700 rounded-xl py-2.5 px-3'
            onChange={(e) => setOrderSend({ ...orderSend, location: e.target.value })}
          />
          <input type="text" placeholder='Number'
            className='border mb-2 border-red-700 rounded-xl py-2.5 px-3'
            onChange={(e) => setOrderSend({ ...orderSend, number: e.target.value })}
          />
        </div>
      </div>

      {/* Modal */}
      {Model && (
        <div className="fixed inset-0 z-50 grid place-content-center p-4 bg-black/20">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Success order</h2>
            <div className="mt-4 space-y-6">
              <ul className="space-y-4">
                <li className='font-bold'>Customer: {orderSend.name}</li>
                <li className='font-bold'>Number: {orderSend.number}</li>
                <li className='font-bold'>Location: {orderSend.location}</li>
                <li className='font-bold'>Time: {time}:{minutes}</li>
                {order.map((item: any, index: number) => (
                  <li className="flex items-center gap-4" key={index}>
                    <img src={item.img} alt={item.name} className="size-16 rounded-sm object-cover" />
                    <div>
                      <h3 className="text-sm text-gray-900">{item.name}</h3>
                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Price:</dt>
                          <dd className="inline">${item.price * item.count}</dd>
                        </div>
                        <div>
                          <dt className="inline">Country:</dt>
                          <dd className="inline">{item.country}</dd>
                        </div>
                      </dl>
                    </div>
                    <label>{item.count}</label>
                  </li>
                ))}
              </ul>
              <span className='block font-bold my-4'>Total Price: ${totalPrice}</span>
              <div className="text-center">
                <button
                  onClick={() => {
                    setOrderSend({ name: "", number: "", location: "" });
                    dispatch(Remove());
                    setModel(false);
                  }}
                  className="rounded-sm bg-red-700 px-5 py-3 text-sm text-white font-bold hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
