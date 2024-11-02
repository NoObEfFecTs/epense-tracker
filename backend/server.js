const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./database.db');
app.use(express.json());

// Initialize the database table
db.run(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY,
    description TEXT,
    amount REAL,
    date TEXT
)`);

// Get all expenses
app.get('/api/expenses', (req, res) => {
    db.all("SELECT * FROM expenses", [], (err, rows) => {
        if (err) return res.status(400).json({error: err.message});
        res.json({data: rows});
    });
});

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

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
