import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <ul>
            {transactions.map(transaction => (
                <li key={transaction._id}>
                    {transaction.type} - {transaction.amount} - {transaction.category}
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;