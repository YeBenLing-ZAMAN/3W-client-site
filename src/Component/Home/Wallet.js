import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Wallet = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    /* use context API to store user information */

    const onSubmit = async data => {
        console.log(data);
    }
    return (
        <div>
            <div className='p-4 bg-base-100'>
                {/* notice section  */}
                <p className='p-1 bg-slate-300'>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-1/2">
                        <label className="label">
                            <span className="label-text">Wallet Address</span>
                        </label>

                        <input
                            type="walletAddress"
                            placeholder="Wallet Address..."
                            className="input input-bordered w-full max-w-1/2 rounded-none outline-none"
                            {...register("walletAddress", {
                                required: {
                                    value: true,
                                    message: 'Wallet Address is Required'
                                },
                            })}
                        />

                        <label className="label">
                            {errors.walletAddress?.type === 'required' && <span
                                className="label-text-alt text-red-500">
                                {errors.walletAddress.message}
                            </span>}
                        </label>


                        <label className="label">
                            <span className="label-text">Request Type</span>
                        </label>

                        <div className=''>
                            <input
                                type="requestType"
                                placeholder="Enter you request type..."
                                className="input input-bordered w-full max-w-xl rounded-none outline-none mr-5"
                                {...register("requestType", {
                                    required: {
                                        value: true,
                                        message: 'Wallet Address is Required'
                                    },
                                })}
                            />

                            <input
                                type="requestAmount"
                                placeholder="Enter Wallet Amount..."
                                className="input input-bordered w-full max-w-xl rounded-none"
                                {...register("requestAmount", {
                                    required: {
                                        value: true,
                                        message: 'Enter Wallet Amount is Required'
                                    },
                                })}
                            />
                        </div>
                        {/* <p className='text-red-500 my-2'>{loginError}</p> */}
                    </div>
                    <input className='btn w-full max-w-xs text-white rounded-none mt-4' type="submit" value="Send Request" />
                </form>      
            </div>
        </div>
    );
};

export default Wallet;