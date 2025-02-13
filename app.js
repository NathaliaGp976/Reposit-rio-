import express from "express";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json())

// metodo e nome de rota tem que ser únicos
app.get('/hello', (req,res)=>{
    return res.status(200).json('Hello World');
})

app.listen(3000, ()=>{
    console.log('api no ar!')
})
