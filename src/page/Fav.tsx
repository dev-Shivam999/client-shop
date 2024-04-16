import  { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/app';
import axios, { AxiosResponse } from 'axios';
import {  newUser, userSelector } from '../store/user';
import RP from '../components/rp';

const Fav = memo(() => {
    const dispatch = useAppDispatch();
    const { pro } = useAppSelector(userSelector);
    const data = pro


    const api = async () => {
        const response: AxiosResponse<API> = await axios.get('https://sever-shop.onrender.com/user/ff', {
            withCredentials: true,
        })



        dispatch(newUser(response.data.products))


    }

    useEffect(() => {
        api()
    }, [data])
    return (
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <div className='grid grid-cols-1 px-3 gap-3 w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    data && data.length > 0 ? data.map((p) => <div key={p.id} className='bg-pink-500 text-white w-full h-[50vh]'>
                        <div className=' mamo w-full overflow-hidden relative h-2/3 '>
                            <img src={p.image} className='bg-yellow-300  w-full h-full' alt="" />
                            <div className='div absolute w-full h-full '>
                                <div>
                                    <div className='flex justify-center'>

                                        <RP p={p} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <h1>{p.brand}</h1>
                            <p>{p.model}</p>
                            <p>{p.category}</p>
                            <h2>${p.price} <span className='line-through'>{p.discount ? "$" + p.discount + "00" : "no dis"}</span></h2>
                        </div>
                    </div>) : <div >ADD in fav⭐ </div>}
            </div>
            
        </div>
    );
});

export default Fav;