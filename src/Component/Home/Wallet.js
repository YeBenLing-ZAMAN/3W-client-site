import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Wallet = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    /* use context API to store user information */

    const onSubmit = async data => {
        console.log(data);
    }
    return (
        <div className='px-6 pt-2 lg:p-0'>
            <div className='p-4 bg-base-100'>
                {/* notice section  */}
                <div className='p-1 bg-slate-300 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill inline-block mr-1" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                    <p className=''>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mt-2 max-w-1/2">
                        <label className="label">
                            <span className="label-text text-primary font-bold">Wallet Address</span>
                        </label>

                        <input
                            type="walletAddress"
                            placeholder="Wallet Address..."
                            className="input input-bordered w-full max-w-xs rounded-none outline-none"
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
                            <span className="label-text text-primary font-bold">Request Type</span>
                        </label>

                        <div className=''>
                            <input
                                type="requestType"
                                placeholder="Enter you request type..."
                                className="input input-bordered w-full max-w-xs rounded-none outline-none mr-5"
                                value={"20 test Link"}
                                {...register("requestType", {
                                    required: {
                                        value: true,
                                        message: 'Wallet Address is Required'
                                    },
                                })}
                            />
                            <br />
                            <input
                                type="requestAmount"
                                placeholder="Enter Wallet Amount..."
                                className="input input-bordered w-full max-w-xs rounded-none mt-4"
                                value={"0.5 ETH"}
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