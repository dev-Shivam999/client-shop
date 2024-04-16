import axios, { AxiosResponse } from 'axios';
import React, { memo, useEffect, useState } from 'react';
import Left from '../components/Left';
import Right from '../components/Right';
import { Link } from 'react-router-dom';
import RP from '../components/rp';
import Lp from '../components/Lp';

const Home = memo(() => {
    const [R, setR] = useState<number[]>([]);
    const [R2, setR2] = useState<number[]>([]);
    const [data, setData] = useState<Products[]>([]);


    const api = async () => {
        const response: AxiosResponse<API> = await axios.get('https://fakestoreapi.in/api/products')
        setData(response.data.products)
    }

    const api2 = async () => {
        const response: AxiosResponse<{ id: number[] }> = await axios.get('https://sever-shop.onrender.com/fav', {
            withCredentials: true,
        })
        setR(response.data.id)
    }
    const api3 = async () => {
        const response: AxiosResponse<{ id: number[] }> = await axios.get('https://sever-shop.onrender.com/user/CountFav', {
            withCredentials: true,
        })
        setR2(response.data.id)
    }

    useEffect(() => {
        api();
        api2();
        api3()
    }, []);




    return (
        <>
            <div>
                <Link to={'/fav'} className='mx-3'>fav⭐</Link>
                <Link to={'/Cart'}>cart🛒</Link>
            </div>
            <div className='grid grid-cols-1 px-3 gap-3 w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {data.map((p, i) => (
                    <div key={p.id} className='bg-pink-500 text-white w-full h-[50vh]'>
                        <div className='mamo w-full overflow-hidden relative h-2/3 '>
                            <img src={p.image} className='bg-yellow-300  w-full h-full' alt="" />
                            <div className='div absolute w-full h-full '>
                                <div>
                                    {R2.includes(data[i].id) ?<RP p={p} />:<Lp p={p}/>}
                                    <div className='flex justify-center'>
                                        {R.includes(data[i].id) ? <Right p={p} /> : <Left p={p} />} 
        
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
                    </div>
                ))}
            </div>
        </>
    );
});

export default Home;
