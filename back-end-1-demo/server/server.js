// Import server code: express and cors
const express = require('express')
const cors = require('cors') // Cross Origin Resource Sharing

// Invoke express variable and save to app variable
const app = express()

// Set up middleware
app.use(express.json())  // When we want to be able to accept JSON.
app.use(cors()) // Allows server to activate CORS

// Endpoints and Database

const dummyDatabase = ['chips', 'dip', 'sourpatch', 'Dr. Pepper', 'Vanilla Coke', 'bratwurst', 'prime rib']

app.get('/api/inventory', (req,res) => {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)

    if(req.query.item){
        console.log('App get IF hit')

        const filteredItems = dummyDatabase.filter((food) => food.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    }else{
        console.log('App get ELSE hit')
        res.status(200).send(dummyDatabase)
    }
})

// if(req.query.item){
//     console.log('App get IF hit')

//     const filteredItems = dummyDatabase.filter((food) => food.includes(req.query.item))

//     res.status(200).send(filteredItems)

// }else{
//     console.log('App get ELSE hit')
//     res.status(200).send(dummyDatabase)
// }

app.get('/api/inventory/:id', (req, res) => {
    // console.log(+req.params.id)
    let index = req.params.id
    console.log(dummyDatabase[index])

    res.status(200).send(dummyDatabase[index])
})

// Open the door for server to be able to recieve requests
app.listen(5050, () => console.log('Server running on 5050'))