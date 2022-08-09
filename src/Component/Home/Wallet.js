import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import RequestHistory from './RequestHistory';
import axios from 'axios';

const Wallet = ({ walletType }) => {
    const [verfied, setVerfied] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [historyChartReloader, setHistoryChartReloader] = useState(false);


    const onSubmit = async data => {
        let date = new Date();
        let time = ((date.getHours().toString()).length > 1 ? date.getHours() : "0" + date.getHours()) + ":" + ((date.getMinutes().toString()).length > 1 ? date.getMinutes() : "0" + date.getMinutes());
        data.time = time;
        data.requestType = walletType
        console.log(data);

        axios.post('http://localhost:5000/wallet_request', {
            data: data
        })
            .then(function (response) {
                console.log(response);
                if (response.data.acknowledged) {
                    console.log(response.data.acknowledged);
                    setHistoryChartReloader(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }





    /* rechapta confirmation function*/
    function onChange(value) {
        // console.log("Captcha value:", value);
        setVerfied(true);
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='px-6 pt-2 lg:p-0 '>
                <div className='p-4 bg-base-100'>
                    {/* notice section  */}
                    <div className='p-1 bg-slate-300 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill inline-block mr-1" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                        <p className=''>Your wallet is connected to <span className='font-bold'> {walletType} </span>, so you are requesting <span className='font-bold'> {walletType} </span> Link/ETH.</p>
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
                                    type="name"
                                    placeholder="Enter you request type..."
                                    className="input input-bordered w-full max-w-xs rounded-none outline-none mr-5"
                                    value={walletType}
                                    disabled
                                />
                                <br />
                                <input
                                    type="number"
                                    placeholder="Enter Wallet Amount..."
                                    className="input input-bordered w-full max-w-xs rounded-none mt-4"
                                    min="0"
                                    {...register("requestAmount", {
                                        required: {
                                            value: true,
                                            message: 'Enter Wallet Amount is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.requestAmount?.type === 'required' && <span
                                        className="label-text-alt text-red-500">
                                        {errors.requestAmount.message}
                                    </span>}
                                </label>

                            </div>
                        </div>

                        <ReCAPTCHA
                            className="w-full max-w-xs rounded-none mt-4"
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />,
                        <input className='btn w-full max-w-xs text-white rounded-none mt-4' type="submit" value="Send Request" disabled={!verfied} />
                    </form>
                </div>
            </div>
            <RequestHistory
                historyChartReloader={historyChartReloader}
                setHistoryChartReloader={setHistoryChartReloader}
            ></RequestHistory>
        </div>
    );
};

export default Wallet;