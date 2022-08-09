import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import axios from 'axios';


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit, control, watch } = useForm();

    const onSubmit = async data => {
        console.log(data);

        /* for API fetch send email and post pass and store it on DB and return a confirm res  */
        await axios.post('http://localhost:5000/signup', {
            data: data,
        })
            .then(function (response) {
                console.log(response);
                if (response.data.acknowledged) {
                    console.log(response.data.acknowledged);
                }
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.message);
            });

    }


    if (false) {
        return <Loading></Loading>
    }


    return (
        <>
            <div className='min-h-screen'>
                <h1 className='text-3xl font-bold text-red-500 text-center mt-5 mb-5'>Welcome to Faucets.</h1>
                <div className='flex justify-center items-center'>
                    <div className="card w-full lg:w-1/2 bg-base-200 shadow-xl p-1 rounded-none">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold text-red-500">Registrate Here</h2>
                            <h2 className="text-center text-sm font-bold ">Then login and enjoy</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='grid grid-col-1 lg:grid-cols-2 gap-x-12 lg:justify-between'>

                                    {/* First name */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>

                                        <input
                                            type="name"
                                            placeholder="Enter Your First Name"
                                            className="input input-bordered w-full max-w-xs rounded-none"
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: 'First Name is Required'
                                                },
                                            })}
                                        />

                                        <label className="label">
                                            {errors.firstName?.type === 'required' && <span
                                                className="label-text-alt text-red-500">
                                                {errors.firstName.message}
                                            </span>}
                                        </label>
                                    </div>

                                    {/* last name */}
                                    <div className="form-control w-full max-w-xs lg:justify-self-end">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>

                                        <input
                                            type="name"
                                            placeholder="Enter Your Last Name"
                                            className="input input-bordered w-full max-w-xs rounded-none"
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: 'Last Name is Required'
                                                },
                                            })}
                                        />

                                        <label className="label">
                                            {errors.lastName?.type === 'required' && <span
                                                className="label-text-alt text-red-500">
                                                {errors.lastName.message}
                                            </span>}
                                        </label>
                                    </div>
                                </div>


                                {/* email */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="input input-bordered w-full rounded-none"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                // value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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

                                {/* phone number secction */}

                                <div className='form-control w-full '>
                                    <label htmlFor="phone" className='label-text'>Phone Number</label>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{
                                            validate: (value) => isValidPhoneNumber(value),
                                            required: true
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <PhoneInput
                                                value={value}
                                                className="input input-bordered rounded-none w-full "
                                                onChange={onChange}
                                                defaultCountry="TH"
                                                id="phone"
                                            />
                                        )}
                                    />
                                    {errors["phone"] && (
                                        <p className="error-message label-text-alt text-red-500">Invalid Phone</p>
                                    )}
                                </div>

                                {/* password and confirm password section */}

                                <div className='grid grid-col-1 lg:grid-cols-2 gap-x-12	lg:justify-between'>


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
                                                    message: 'Minimum 6 characters and at least one upper letter, lower letter, one digit, one spacial character needed'
                                                },
                                                pattern: {
                                                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                                                    message: 'at least one upper letter, lower letter, one digit, one spacial character needed'
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
                                            {errors.password?.type === 'pattern' && <span
                                                className="label-text-alt text-red-500">
                                                {errors.password.message}
                                            </span>}

                                        </label>
                                    </div>

                                    {/* confirm password */}
                                    <div className="form-control w-full max-w-xs lg:justify-self-end">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>

                                        <input
                                            type="password"
                                            placeholder="Enter Your Password for Confirm "
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
                                </div>

                                <input className='btn w-full rounded-none text-white' type="submit" value="Register" />
                            </form>
                            <p className='text-center'><small>Already Have a account? <Link to='/login' className='text-red-500'>Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;