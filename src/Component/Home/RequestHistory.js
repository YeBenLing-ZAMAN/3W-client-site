import React, { useEffect } from 'react';
import { useState } from 'react';
import HistoryTableRow from './HistoryTableRow';

const RequestHistory = () => {
    const [allTransction, setAllTransction] = useState([]);
    const [transctionDetails, setTransctionDetails] = useState([]);
    const [searchType, setSearchType] = useState('EHT');

    useEffect(() => {
        fetch('tempData.json')
            .then(res => res.json())
            .then(data => {
                setAllTransction(data);
                setTransctionDetails(data.filter(item => item.type === "EHT"))
            })
    }, [])


    const showingTansctionDetails = (target) => {
        setSearchType(target);
        const findList = allTransction.filter(item => item.type === target);
        setTransctionDetails(findList);
    }

    return (
        <div className='px-6 lg:p-0 lg:bg-base-100'>
            <div className='pb-10 px-4 bg-base-100'>
                <h3 className='font-bold text-primary mb-4'>Request History</h3>
                <button className={`btn ${searchType === 'EHT' ?"btn-primary": " btn-ghost"} btn-sm rounded-none mr-4`} onClick={() => { showingTansctionDetails("EHT") }} >EHT Transction History</button>
                <button className={`btn ${searchType === 'TestLink' ?"btn-primary": " btn-ghost"} btn-sm mt-3 lg:mt-0 rounded-none mr-4`} onClick={() => { showingTansctionDetails("TestLink") }}>Testlink Transction History</button>
            </div>

            <div className='px-05 lg:p-4 w-full lg:w-2/5 overflow-x-auto max-w-7xl pb-5 table-container'>
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
                                key={item.id}
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