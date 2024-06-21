import express from "express";
const app = express()
import 'dotenv/config'
const port = process.env.PORT;

const jokeData = [
    {
        "id": 1,
        "title": "Why don't scientists trust atoms?",
        "content": "Because they make up everything!"
    },
    {
        "id": 2,
        "title": "How does a penguin build its house?",
        "content": "Igloos it together!"
    },
    {
        "id": 3,
        "title": "Why did the scarecrow win an award?",
        "content": "Because he was outstanding in his field!"
    },
    {
        "id": 4,
        "title": "Why don't skeletons fight each other?",
        "content": "They don't have the guts!"
    },
    {
        "id": 5,
        "title": "What do you call fake spaghetti?",
        "content": "An impasta!"
    }
]

app.get("/",(req,res)=>{
    res.send("Hello Guys");
})
app.get("/twitter",(req,res)=>{
    res.send("Its Twitter");
})
app.get("/youtube",(req,res)=>{
    res.send("Its Youtube");
})
app.get("/api/jokes",(req,res)=>{
    res.json(jokeData)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})