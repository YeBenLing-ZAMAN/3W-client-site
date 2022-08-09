import React from 'react';

const HistoryTableRow = ({ item, index }) => {
    const { time, requestAmount ,requestType,walletAddress} = item;
    return (
        <tr>
            <th>{index}</th>
            <td>{time}</td>
            <td>{requestAmount} {requestType.substr(0, 3).toUpperCase()}</td>
            <td>{walletAddress}</td>
        </tr>
    );
};

export default HistoryTableRow;