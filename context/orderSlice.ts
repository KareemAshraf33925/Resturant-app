"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// identifcation of props
type Orderitems={
   id?:string;
    img:string;
    name:string;
    dsc?:string;
    price:number;
    rate?:number;
    country?:string;
    count:number;
}

type OrderProps={
     order:Orderitems[],
}

// Define the initial state using that type

const initialState: OrderProps = {
  order:  [],
};

export const OrderSlice = createSlice({
  name: 'counter',
 
  initialState,
  reducers: {
    // add order
    Add:(state,action:PayloadAction<Orderitems>)=>{
      const  Item=action.payload;
        const Order=state.order.find((item:any)=>item.id === Item.id )
        if(Order){
            Order.count +=1;
        }else{
        state.order=[...state.order,{...Item,count:1}]
        }
      
    },
    // increase amount of order
     increament:(state,action:PayloadAction<Orderitems>)=>{
      const  Item=action.payload;
        const Order=state.order.find((item:any)=>item.id === Item.id )
        if(Order){
            Order.count =Order.count?Order.count +1 :1 ;
         
    }
     
  },
  // decrease amount of order
     decreament:(state,action:PayloadAction<Orderitems>)=>{
      const  Item=action.payload;
        const Order=state.order.find((item:any)=>item.id === Item.id )
        if(Order){
            Order.count =Order.count?Order.count -1 :1 ;
            
        }
        
    },
    // delete order
    Delete:(state,action:PayloadAction<Orderitems>)=>{
  const  Item=action.payload;
        const Order=state.order.filter((item:any)=>item.id !== Item.id )
        state.order=Order
       
        },
        // clear cart
        Remove:(state)=>{
           state.order=[]
        }

    }
  },
)



// export actions
export const{Add,Delete,increament,decreament,Remove}=OrderSlice.actions
export default OrderSlice.reducer