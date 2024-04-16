import axios, { AxiosResponse } from 'axios';
import  { memo, useState } from 'react';
import { useAppDispatch } from '../store/app';
import { fil } from '../store/user';

const Right = memo(({ p }: { p: Products,  }) => {

    const dispatch = useAppDispatch();
    
    
    const [check, Setcheck] = useState<boolean>(true)
    const api = async (dat: Products) => {
        const reponse: AxiosResponse<Add> = await axios.post('https://sever-shop.onrender.com/user/cart', { data: dat }, {
            withCredentials: true,
        })
        Setcheck(reponse.data.success)
        dispatch(fil(dat))
      

    }


    return (
        <button className='bg-white text-zinc-800 rounded-xl p-3 text-3xl absolute top-[80%] -translate-y-[80%] ' onClick={() =>  api(p)}>{check ? "remove to cart " : "add to cart"}</button>

    );
})

export default Right;