import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './ReaderComponents.css'

function ReaderComponents() {
    const [readdata, setReaddata] = useState()
    const { urlCode } = useParams()
    // console.log(urlCode)

    axios.get(`http://localhost:3000/${urlCode}`)
        .then((response) => {
            // console.log(response.data.Data.txt)
            setReaddata(response.data.Data.txt)
        })
        .catch((error) => { console.log(error.message) })

    // console.log(readdata)


    // function handleCopy() {
    //     const text = readdata;
    //     const input = document.createElement("input");
    //     input.setAttribute("value", text);
    //     document.body.appendChild(input);
    //     input.select();
    //     document.execCommand("copy");
    //     document.body.removeChild(input);

    //     // txt.select();
    //     // document.execCommand("Copy")

    // }
    // const Content = "Hello Buddy Bro"

    return (
        <div className='reader'>
            <p>Select & Copy Your Content:</p>
            <div className='reader_contentBox'>
                {readdata}
            </div>
            {/* <div className='reader_btn'>
                <button id='btn' onClick={handleCopy} >Copy Content</button>
            </div> */}
        </div>
    )
}

export default ReaderComponents