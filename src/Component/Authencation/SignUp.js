import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const onSubmit = async data => {
        console.log(data);
        const userInfo = { name: data.name, email: data.email, password: data.password };
        console.log(userInfo);

         /* for API fetch send email and post pass and store it on DB and return a confirm res  */

    }


    if (false) {
        return <Loading></Loading>
    }


    return (
        <>
            <div className='h-screen'>
                <h1 className='text-3xl font-bold text-red-500 text-center mt-5 mb-5'>Welcome to Faucets.</h1>
                <div className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl p-1">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold text-red-500">Registrate Here</h2>
                            <h2 className="text-center text-sm font-bold ">Then login and enjoy</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* email */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>

                                    <input
                                        type="name"
                                        placeholder="Enter Your Name"
                                        className="input input-bordered w-full max-w-xs rounded-none"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            },
                                        })}
                                    />

                                    <label className="label">
                                        {errors.name?.type === 'required' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>}
                                        {errors.name?.type === 'pattern' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>}

                                    </label>
                                </div>
                                {/* email */}
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
                                {/* password */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
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

                                {/* confirm password */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className="input input-bordered w-full max-w-xs rounded-none"
                                        autoComplete='off'
                                        {...register("confirm_password", {
                                            required: {
                                                value: true,
                                                message: 'Confirm Password is Required'
                                            },
                                            validate: (val) => {
                                                if (watch('password') !== val) {
                                                    return "Your passwords do no match";
                                                }
                                            },
                                        })}
                                    />

                                    <label className="label">
                                        {errors.confirm_password?.type === 'required' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.confirm_password.message}
                                        </span>}

                                        {errors.confirm_password?.message === 'Your passwords do no match' && <span
                                            className="label-text-alt text-red-500">
                                            {errors.confirm_password.message}
                                        </span>}

                                    </label>
                                </div>

                                <input className='btn w-full max-w-xs rounded-none text-white' type="submit" value="Register" />
                            </form>
                            <p><small>Already Have a account? <Link to='/login' className='text-red-500'>Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;