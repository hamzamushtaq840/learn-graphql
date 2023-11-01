const express = require('express');
const app = express()
const grapghql = require('graphql')
const graphqlHTTP = require('express-graphql');

app.listen(3000,()=>
{
  console.log('listening on port 3000')
})