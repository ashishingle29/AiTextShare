const express = require('express');
const contentController = require('../controller/contentController');
const route = express.Router()
const { urlCreate, getUrl, updateUrl } = require('../controller/iplUrl')

route.get('/get', (req, res) => {
    res.send("Data From GET")
}) 

// TXT Sharing App 
route.post('/create', contentController.create );
route.get('/:urlCode', contentController.getContent);

route.post('/iplurl', urlCreate);
route.get('/ipl/getiplurl', getUrl)
route.put('/ipl/updateurl', updateUrl)
 

route.all('/*', (request,response)=>{response.status(400).send("HTTP Method Wrong")})


module.exports = route 