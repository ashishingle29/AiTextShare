import axios from 'axios'
import React from 'react'
import './UpdateUrl.css'

const bk = "https://aitext-share-bkl.onrender.com" 
// const bk = "http://localhost:3000" 


function UpdateUrl() {

    const updateUrl = (event) => {
        event.preventDefault()
        const LiveUrl = {
            url : event.target[0].value
        }
        // console.log(LiveUrl)
        axios.put(`${bk}/ipl/updateurl`, LiveUrl)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error.message);
        })
        
        event.target.reset()
    }


  return (
      <div className='Update'>
          <h1 className='UpdateH1'>
              Update IPL Live Score Url
          </h1>
          <form onSubmit={updateUrl} className='UpdateForm'>
              <input className='UpdateInput' type='text' placeholder="Paste Live Url..." required />
              <button className='UpdateButton'>Submit</button>
          </form>
    </div>
  )
}

export default UpdateUrl