import React from 'react';

const HistoryTableRow = ({ item, index }) => {
    const { time, amount, hash } = item;
    return (
        <tr>
            <th>{index}</th>
            <td>{time}</td>
            <td>${amount}</td>
            <td>{hash}</td>
        </tr>
    );
};

export default HistoryTableRow;