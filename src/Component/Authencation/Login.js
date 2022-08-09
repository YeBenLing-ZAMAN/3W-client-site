import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();


    /* use context API to store user information */

    const onSubmit = async data => {
        //  console.log(data);
         /* for API fetch send email and get pass and confirm to match or not then update user state  */
         setIsLoading(true);
         await axios.post('https://dry-journey-20353.herokuapp.com/login', {
            data: data,
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    toast.success("login successfull");
                    navigate('/');
                }
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                if(error.message.toLowerCase().includes("400".toLowerCase())){
                    toast.error("user is not Register");
                    setTimeout(function(){
                        navigate('/signup');
                   }, 2000)

                };
                setIsLoading(false);
            });

    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <>
            <div className="h-screen">
                <h1 className='text-3xl font-bold text-red-500 text-center mt-20 mb-10'>welcome to Faucets</h1>
                <div className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-200 shadow-xl p-5 rounded-none">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold text-red-500">Login</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="input input-bordered w-full max-w-xs rounded-none"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: 'Enter Vaild Email Address'
                                            }
                                        })}
                                    />

                                    <label className="label">
                                        {errors.email?.type === 'required' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.email.message}
                                        </span>}
                                        {errors.email?.type === 'pattern' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.email.message}
                                        </span>}

                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">password</span>
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className="input input-bordered w-full max-w-xs rounded-none"
                                        autoComplete='off'
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />

                                    <label className="label">
                                        {errors.password?.type === 'required' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.password.message}
                                        </span>}
                                        {errors.password?.type === 'minLength' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.password.message}
                                        </span>}

                                    </label>
                                </div>

                                <input className='btn w-full max-w-xs text-white rounded-none' type="submit" value="Login" />
                            </form>
                            <p><small>New to here? <Link to='/signup' className='text-red-500'>Create New Account</Link></small></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;