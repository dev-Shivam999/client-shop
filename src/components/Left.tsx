import axios, { AxiosResponse } from 'axios';
import React, { memo, useState } from 'react';

const Left = memo(({p}:{p:Products}) => {
const [check,Setcheck]=useState<boolean>(false)
    const api=async(dat:Products)=>{
        const reponse: AxiosResponse<Add> = await axios.post('https://sever-shop.onrender.com/user/cart',{data:dat,
         
          
      }, {
          withCredentials: true,
      })
  Setcheck(reponse.data.success)

    }

   
    return (
        <button className='bg-white text-zinc-800 rounded-xl p-3 text-3xl absolute top-[80%] -translate-y-[80%] ' onClick={() =>  api(p)}>{check?"remove to cart ":"add to cart"}</button>

    );
})

export default Left;