import sqlite3 from 'sqlite3';

// Connects to database (creates one if it doesn't exist)
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Initialize the database table
db.run(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    amount REAL,
    date TEXT
)`);

/*
const getExpenses = (callback) => {
    db.all("SELECT * from expenses", (err, rows) => {
        if (err){
            return callback(err, null);
        }
        callback(null, rows);
    });
};
*/

export const getExpenses = () => {
    return new Promise((resolve, reject) => {
        console.log("Getting all data from database")
        db.all("SELECT * FROM expenses", (err, rows) => {
            if (err) {
                reject(err);
            }
                resolve(rows);
        });
    });
};

export const getExpenseById = (id) => {
    return new Promise ((resolve, reject) => {
        // console.log("ID: ", id)
        db.get("SELECT * FROM expenses WHERE id=?", [id], (err, rows) => {
            if (err){
                reject(err);
            }else{
                resolve(rows);
            }
        });
    });
};

export const insertExpense = (description, amount, date) => {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)", 
            [description, amount, date],
            function(err){
                if (err){
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
        }
    );
    }); 
};

export const updateExpense = (id, description, amount, date) => {
    return new Promise ((resolve, reject) => {
        // check if element exsists in db
        // console.log("ID: ",id)
        db.get("SELECT * FROM expenses WHERE id = ?", [id], (err, row) => {
            if (err) {
                reject(err);
            } else if (!row) {
                reject(new Error("Expense not found"))
            } else {
                db.run("UPDATE expenses SET description = ?, amount = ?, date = ? WHERE id = ?",
                    [description, amount, date, id],
                    function(err){
                        if (err){
                            reject(err);
                        } else{
                            resolve("Update successful");
                        }
                    }
                );
            }
        });

    });
};

export const deleteExpense = (id) => {
    return new Promise ((resolve, reject) => {
        // console.log("ID: ", id)
        db.run("DELETE FROM expenses WHERE id=?", [id], (err) => {
            if (err){
                reject(err);
            }else{
                resolve("Entry gone");
            }
        })
    })
}