import React, { useEffect, useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Chart from './Chart';
import transactionService from '../services/transactionService';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await transactionService.getTransactions();
            setTransactions(data);
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <TransactionForm />
            <TransactionList transactions={transactions} />
            <Chart transactions={transactions} />
        </div>
    );
};

export default Dashboard;