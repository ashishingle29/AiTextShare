const iplModel = require('../Model/iplUrlModel')



const urlCreate = async function(req, res) {
    try {
        const data = req.body;
        console.log(data)
        const finalData = await iplModel.create(data)
        
        res.status(200).send({ status: "successfully created", data: finalData })
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })
    }
    
}


const getUrl = async function (req, res) {
    try {
        data = await iplModel.findOne({ _id: "646fa9363c142e5b59f0f66a" })
        
        res.status(200).send({status: "getting data Success", data: data})
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })
    }
}

const updateUrl = async function (req, res) {
    try {
        const url = req.body.url
        
        // console.log(url, "url");
        data = await iplModel.findByIdAndUpdate({ _id: "646fa9363c142e5b59f0f66a" }, {url: url}, { new: true })
        
        res.status(200).send({ status: "Url Updated SuccessFully", data: data })

    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })
    }
}


module.exports = { urlCreate, getUrl, updateUrl }