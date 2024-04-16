import axios, { AxiosResponse } from 'axios';
import  { memo, useState } from 'react';

const Lp = memo(({ p }: { p: Products }) => {
    const [check, Setcheck] = useState<boolean>(false)
    const api = async (dat: Products) => {
        const reponse: AxiosResponse<Add> = await axios.post('https://sever-shop.onrender.com/user/AddFav', { data: dat }, {
            withCredentials: true,
        })
        Setcheck(reponse.data.success)

    }


    return (
        <button className={`w-5 h-5 border border-red-500 rounded-full ${check ? "bg-red-600" : ""}  transition-all duration-300  m-3 absolute right-0`} onClick={() => api(p)}></button>
    );
})

export default Lp;