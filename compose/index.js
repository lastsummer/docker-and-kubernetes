const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient()
client.set('vistis', 0)

app.get('/', (req,res) => {
  client.get('vistis', (err, vistis) =>{
    res.send(`Number of visits is ${visits}`)
    client.set('vistis', parseInt(vistis) + 1)
  });
});

app.listen(8081, ()=>{
  console.log('Listening on port 8081')
})