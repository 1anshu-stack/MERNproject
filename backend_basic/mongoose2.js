const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://cluster0.7p6vf67.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri, {
    dbName: "cluster0",
    user: "jogi661",
    pass: "@N$hu-11228",
    autoIndex: true,
    connectTimeoutMS: 300000,
    maxPoolSize: 5,
    minPoolSize: 1,
});

const bookSchema = new mongoose.Schema({
    title: String,
    author: String
})
const Books = new mongoose.model('books', bookSchema);

app.use(express.json());
app.get('/books', async (req, res)=>{
    try{
        const books = await Books.find();
        console.log(books);
        res.json(books);
    }
    catch(err){
        res.status(500).json({erro: 'some external error' })
    }
})


app.post('/books', async (req, res)=>{
    console.log(req.body);
    try{
        const {title, author} = req.body;
        const newBook = new Books({title, author}); 
        await newBook.save(); 
        res.status(201).json(newBook);
    }
    catch(err){
        res.status(404).json({err: 'some internal error'})
    }
})

app.put('/books/:id', async (req, res)=> {
    console.log(req.params);
    const {id} = req.params;
    const {title, author} = req.params;
    const updatedbook = await Books.findByIDAndUpdate(id, {title, author});
    req.json(updatedbook);
})

app.delete('/books/:id', async (req, res)=> {
    const {id} = req.params;
    await Books.findByIDAndRemove(id);
    req.sendStatus(204);
})

app.listen(3000, ()=>{
    console.log('server is created...')
})