import {getExpenses, insertExpense} from './database.js';
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

// Update an existing expense


// Delete an expense


/*
// Add a new expense
app.post('/api/expenses', (req, res) => {
    const { description, amount, date } = req.body;
    db.run(`INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)`,
        [description, amount, date],
        function(err) {
            if (err) return res.status(400).json({error: err.message});
            res.json({ id: this.lastID });
        }
    );
});

// Update an expense
app.put('/api/expenses/:id', (req, res) => {
    const { description, amount, date } = req.body;
    db.run(`UPDATE expenses SET description = ?, amount = ?, date = ? WHERE id = ?`,
        [description, amount, date, req.params.id],
        function(err) {
            if (err) return res.status(400).json({error: err.message});
            res.json({ updated: this.changes });
        }
    );
});

// Delete an expense
app.delete('/api/expenses/:id', (req, res) => {
    db.run(`DELETE FROM expenses WHERE id = ?`, req.params.id, function(err) {
        if (err) return res.status(400).json({error: err.message});
        res.json({ deleted: this.changes });
    });
});
*/

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
