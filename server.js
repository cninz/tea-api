const express = require('express')
const app = express()
const cors = require ('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong' : {
        'type' : 'black', 
        'origin' : 'yo mamas house',
        'waterTemp' : 200,
        'steepTimeSeconds' : 180,
        'caffienated' : true,
        'flavor' : 'delicious'
    },
    'matcha' : {
        'type' : 'green', 
        'origin' : 'yo mamas house',
        'waterTemp' : 200,
        'steepTimeSeconds' : 180,
        'caffienated' : false,
        'flavor' : 'delicious'
    },
    'unknown' : {
        'type' : 'unknown', 
        'origin' : 'unkown',
        'waterTemp' : 0,
        'steepTimeSeconds' : 
        0,
        'caffienated' : false,
        'flavor' : 'delicious'
    }
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta go catch it!`)
})