import {deleteExpense, getExpenses, insertExpense, updateExpense} from './database.js';
import express, { json } from 'express';

const app = express();
app.use(json());

// Get all expenses
app.get('/api/expenses', async(req, res) =>{
    try {
        const rows = await getExpenses();
        res.json({data: rows}) 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Add a new expense
app.post('/api/expenses', async (req, res) => {
    try{
        const { description, amount, date } = req.body;
        const newId = await insertExpense(description, amount, date);
        res.status(201).json({id: newId, message: 'Expense entry created!'});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

app.put('/api/expenses', async (req, res) => {
    try{
        const {id, description, amount, date} = req.body;
        await updateExpense(id, description, amount, date);
        res.status(202).json({message: 'Update was successful'});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

app.delete("/api/expenses", async (req, res) => {
    try{
        const {id} = req.body;
        await deleteExpense(id);
        res.status(200).json({message: 'Deletion complete'})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
