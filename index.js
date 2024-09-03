require('dotenv').config()
const express = require('express')
const app = express()
const port=process.env.PORT

const characters=require('./harrypotter.json')
//middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Harry Potter Characters")
})

app.get('/',(req,res)=>{
    res.send("Hello Harry Potter Characters")
})

app.get('/characters',(req,res)=>{
    res.send(characters)
})

app.get('/characters/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const character=characters.find((character)=>character.id===id)
    if(character==undefined){
        res.status(404).send("The character does not exist")
    }else{
        res.send(character)
    }
})

const ids=characters.map((character)=>(character.id))
let maxId=Math.max(...ids)

app.post('/characters',(req,res)=>{
    const character=characters.find((character)=>character.name.toLowerCase()===req.body.name.toLowerCase())
    console.log(req.body)
    if(character!=undefined){
        res.status(409).send("The character already exists");
    }
    else{
        maxId+=1;//this is equal to maxId=maxId+1
        req.body.id=maxId;
        characters.push(req.body)
        res.status(201).send(req.body)
    }
})

app.delete("/characters/:name",(req,res)=>{
    const name=req.params.name.toLowerCase();
    const characterIndex=characters.findIndex((character)=>character.name.toLowerCase()==name)
    console.log(characterIndex)
    if(characterIndex==-1){
        res.status(404).send("The character does not exist")
    }
    else{
        characters.splice(characterIndex,1)
        res.sendStatus(204)
    }
})

//homework-create a patch request to update the name of the character


// PATCH request to update a character's name
app.patch('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const character = characters.find((character) => character.id === id);

    // Check if the character with the given ID exists
    if (!character) {
        return res.status(404).send("The character does not exist");
    }

    // Check if the new name is provided in the request body
    const newName = req.body.name;
    if (!newName) {
        return res.status(400).send("Please provide a new name");
    }

    // Update the character's name
    character.name = newName;

    // Respond with the updated character
    res.send(character);
})



app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})