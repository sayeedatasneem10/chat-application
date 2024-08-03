const express = require("express")
const cors = require("cors")
const axios=require("axios")

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    
  try{
    const r=await axios.put('https://api.chatengine.io/users/',
        {username:username, secret: username,first_name:username},
        {headers: {"private-key":"00c14833-7fed-4ff7-9960-c5cf8c428f82"}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001)