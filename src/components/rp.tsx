import axios, { AxiosResponse } from 'axios';
import React, { memo, useState } from 'react';
import { useAppDispatch } from '../store/app';
import { fil, fil2 } from '../store/user';

const RP = memo(({ p }: { p: Products, }) => {

    const dispatch = useAppDispatch();


    const [check, Setcheck] = useState<boolean>(true)
    const api = async (dat: Products) => {
        const reponse: AxiosResponse<Add> = await axios.post('https://sever-shop.onrender.com/user/AddFav', { data: dat }, {
            withCredentials: true,
        })
        Setcheck(reponse.data.success)
        dispatch(fil2(dat))


    }


    return (
        <button className={`w-5 h-5 border border-red-500 rounded-full ${check? "bg-red-600":""}  transition-all duration-300  m-3 absolute right-0`} onClick={() => api(p)}></button>
        // <div className= onClick={() => heart(p)}></div>}

    );
})

export default RP;