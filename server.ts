// 'npm run dev' in terminal to start

// imports
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql, { createConnection } from 'mysql';

// app set-up
const app: Express = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static("./"));

// port
if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

// mysql db connection
const conn = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_KEY,
    database: process.env.DB
  });

conn.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to ${process.env.DB} database`); // works
});
  
// read req to db
app.get('/db', (req: Request, res: Response) => {
    conn.query("SELECT * FROM customers;", (err, results, fields) => {
        if(err) throw err;
        res.send(results); // works
        // console.log(results) 
    });
}); 

// test
// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server');
// })

// listen on the port
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ${PORT}`); // works
}); 