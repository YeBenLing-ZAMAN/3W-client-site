import React, { useEffect } from 'react';
import { useState } from 'react';
import HistoryTableRow from './HistoryTableRow';
import axios from 'axios';


const RequestHistory = ({ setHistoryChartReloader, historyChartReloader }) => {
    const [allTransction, setAllTransction] = useState([]);
    const [transctionDetails, setTransctionDetails] = useState([]);
    const [searchType, setSearchType] = useState('EHT');

    useEffect(() => {
        axios.get('https://dry-journey-20353.herokuapp.com/wallet_add')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setAllTransction(response.data);
                // setTransctionDetails(response.data.filter(item => item.requestAmount.toLowerCase().includes("ETH".toLowerCase())))
                setTransctionDetails(response.data);
                setHistoryChartReloader(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [historyChartReloader, setHistoryChartReloader])


    const showingTansctionDetails = (target) => {
        setSearchType(target);
        // const findList = allTransction.filter(item => item.type === target);
        const findList = (allTransction);
        setTransctionDetails(findList);
    }

    return (
        <div className='px-6 lg:p-0 lg:bg-base-100'>
            <div className='pb-10 px-4 bg-base-100'>
                <h3 className='font-bold text-primary mb-4'>Request History</h3>
                <button className={`btn ${searchType === 'EHT' ? "btn-primary" : " btn-ghost"} btn-sm rounded-none mr-4`} onClick={() => { showingTansctionDetails("EHT") }} >Transction History</button>
                <button className={`btn ${searchType === 'TestLink' ? "btn-primary" : " btn-ghost"} btn-sm mt-3 lg:mt-0 rounded-none mr-4`} onClick={() => { showingTansctionDetails("TestLink") }}>Testlink Transction History</button>
            </div>

            <div className='px-05 lg:p-4 w-full overflow-x-auto max-w-7xl pb-5 table-container'>
                <table className="table table-compact table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead className='rounded-none	'>
                        <tr>
                            <th>Sr</th>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Hash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transctionDetails?.map((item, index) => <HistoryTableRow
                                key={item._id}
                                item={item}
                                index={index}
                            ></HistoryTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestHistory;