// import {deleteExpense, getCategories, getExpenseById, getExpenses, getLastExpenses, insertExpense, insertCategory ,updateExpense, getExpensesByCat, getCatDiagData, getDiagData} from './database.js';
// import alles from './database.js';
import * as database from "./database.js";
import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(json(), cors());

// get categories
app.get('/api/categories', async(req, res) =>{
    try {
        const rows = await database.getCategories();
        res.json({data: rows}) 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Add a new category
app.post('/api/categories', async (req, res) => {
    try{
        const { category } = req.body;
        const newId = await database.insertCategory(category);
        res.status(201).json({id: newId, message: 'Category created!'});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

// Get all expenses
app.get('/api/expenses', async(req, res) =>{
    try {
        const rows = await database.getExpenses();
        res.json({data: rows}) 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Get last expenses
app.get('/api/expenses/last/:n', async(req, res) =>{
    try {
        const {n} = req.params;
        const rows = await database.getLastExpenses(n);
        res.json({data: rows}) 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Get expenses for a category
app.get('/api/expenses/category/:cat', async(req, res) =>{
    try {
        const {cat} = req.params;
        console.log(cat)
        const rows = await database.getCatExpenses(cat);
        res.json({data: rows}) 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Get expenses by category
app.get('/api/expenses/category/', async(req, res) =>{
    try {
        const rows = await database.getExpensesByCat();
        res.json({data: rows}) 
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Get expense by id
app.get('/api/expenses/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        console.log("ID: ",id)
        const rows = await database.getExpenseById(id);
        // console.log(rows.data)
        // res.status(200).json({data: rows, message: "test"})
        res.json({data: rows})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

// Add a new expense
app.post('/api/expenses', async (req, res) => {
    try{
        const { description, amount, category ,date } = req.body;
        const newId = await database.insertExpense(description, amount, category ,date);
        res.status(201).json({id: newId, message: 'Expense entry created!'});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

// Update an existing expense
app.put('/api/expenses', async (req, res) => {
    try{
        const {id, description, amount, category ,date} = req.body;
        await database.updateExpense(id, description, amount, category ,date);
        res.status(200).json({message: 'Update was successful'});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

// Delete an existing expense
app.delete("/api/expenses/:id", async (req, res) => {
    try{
        const {id} = req.params;
        await database.deleteExpense(id);
        res.status(200).json({message: 'Deletion complete'})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
});

app.listen(3123, () => {
    console.log('Server running on http://localhost:3123');
});
