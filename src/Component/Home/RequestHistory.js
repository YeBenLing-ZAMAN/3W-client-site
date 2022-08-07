import React, { useEffect } from 'react';
import { useState } from 'react';
import HistoryTableRow from './HistoryTableRow';

const RequestHistory = () => {
    const [allTransction, setAllTransction] = useState([]);
    const [transctionDetails, setTransctionDetails] = useState([]);
    const [searchType, setSearchType] = useState('all');

    useEffect(() => {
        fetch('tempData.json')
            .then(res => res.json())
            .then(data => {
                setAllTransction(data);
            })
    }, [])


    const showingTansctionDetails = (target) => {
        setSearchType(target);
        const findList = allTransction.filter(item => item.type === target);
        setTransctionDetails(findList);
    }

    return (
        <>
            <div className='mt-10 pb-10'>
                <h3>Request History</h3>
                <button className='btn btn-primary rounded-none mr-4' onClick={() => { showingTansctionDetails("EHT") }} style={{ color: searchType === 'EHT' ? "tomato" : "" }}>EHT Transction History</button>
                <button className='btn rounded-none' onClick={() => { showingTansctionDetails("TestLink") }} style={{ color: searchType === 'TestLink' ? "tomato" : "" }}>Testlink Transction History</button>
            </div>

            <div className='w-full lg:w-2/5'>
                <table className="table table-compact w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Serial NO</th>
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
        </>
    );
};

export default RequestHistory;