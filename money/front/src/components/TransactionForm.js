import React, { useState } from 'react';
import transactionService from '../services/transactionService';

const TransactionForm = () => {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await transactionService.addTransaction(type, amount, category);
            // Refresh the transaction list
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;