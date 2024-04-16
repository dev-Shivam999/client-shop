import React, { memo, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

const Login = memo(() => {
    const email = useRef<HTMLInputElement|null>(null)
    const password = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    const hand = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(email.current?.value==""&&password.current?.value==""){
            return alert("Please enter the email address and password")
        }else if(email.current?.value==""){
            return alert("Please enter the email address")
        }
        else if(password.current?.value==""){
            return alert("Please enter the password")
        }else{
            const data: AxiosResponse<LO> = await axios.post('https://sever-shop.onrender.com/user/Login',
            { data: { email: email.current?.value, password: password.current?.value} },
            {
                withCredentials: true,
            }, 
        )
            if (data.data.success) {
                email.current!.value = ""
                password.current!.value = ""
              
                alert(data.data.message)
                navigate('/')

            } else {
                alert(data.data.message)
            }
        }
      

    }
    return (
        <div className="h-[80vh] py-6 flex flex-col justify-center sm:py-12">
            <div className=" lg:w-4/12 md:w-1/2 sm:w-6/12 w-full mx-auto">
                <div className="p-5 border-b-2">
                    <h4 className="font-semibold uppercase text-gray-700">Login</h4>
                </div>
                <div className="p-5">
                    <form className="w-full" onSubmit={(e) => hand(e)}>
                        <div className="inline-grid w-full mb-3">
                            <label className="mb-2">Email</label>
                            <input
                                type="email"
                                ref={email}
                                name="email"

                                className="focus:outline-none focus:ring-2 ring-pink-300 placeholder-white bg-pink-200 w-full p-2 rounded"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="inline-grid w-full mb-3">
                            <label className="mb-2">Password</label>
                            <input
                                type="password" ref={password}
                                name="password"
                                className="focus:outline-none focus:ring-2 ring-pink-300 placeholder-white bg-pink-200 w-full p-2 rounded"
                                placeholder="Password"
                            />
                        </div>
                        <div className="p-5 border-t-2 flex gap-1">
                            <div className="inline-grid w-1/2 mb-3">
                                <Link
                                    to={"/Sign"}
                                    className="bg-pink-600 focus:outline-none p-1.5 rounded font-semibold  hover:bg-pink-800 text-center hover:text-white text-white">
                                    Register
                                </Link>
                            </div>
                            <div className="inline-grid w-1/2 mb-3">
                                <button
                                    type="submit"
                                    className=" p-1.5 rounded focus:outline-none font-semibold hover:bg-pink-500 hover:text-white transition text-pink-500 border border-pink-500">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
})

export default Login;







