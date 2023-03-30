import { React, useState } from 'react'
import axios from 'axios'
import './CreateComponents.css'
import { NavLink } from "react-router-dom";

const bk = "https://aitext-share-bkl.onrender.com" // process.env.BACK_END


function CreateComponents() {

    const [content, setContent] = useState("")
    const [baseurl, setBaseurl] = useState("")
    const [txt, setTxt] = useState("")

    const Submit = function (event) {
        event.preventDefault()
        let textData = {}
        textData.txt = content
        axios.post(`${bk}/create`, textData)
            .then((res) => {
                setBaseurl(res.data.TextContent.baseurl)
                setTxt(res.data.TextContent.txt)
                // setTxt(JSON.stringify(res.data.TextContent.txt))

                alert("Your Text is ready to Share")
                console.log(res.data.TextContent)
            })

            .catch((err) => {
                alert(err.message)
                console.log(err)
            })
        // console.log(JSON.parse(txt))
        // console.log(response)


    }

    function handleCopy() {
        const text = "https://toolshub.netlify.app/aitxt"+baseurl;
        const input = document.createElement("input");
        input.setAttribute("value", text);
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        // txt.select();
        // document.execCommand("Copy")

    }
    return (
        <div id='mainBox'>
            <div className='heading'>
                <h2>Welcome to Ai-Text Share</h2>
            </div>
            <form onSubmit={Submit}>
                <div className='input_box'>
                    <span className='content_Boxheading'>Input Content Box:</span>

                    {/* <input type="textarea" className='inputs' placeholder='Write your text here' required value={content} onChange={(e) => { setContent(e.target.value) }} /> */}
                    <textarea type="textarea" className='inputs' placeholder='Write your text here' required value={content} onChange={(e) => { setContent(e.target.value) }} ></textarea>
                </div>
                <div className='form_submit'>
                    <button type="submit" id='btn'>Share Now</button>
                </div>
            </form>

            {
                baseurl && (
                    <div className='SubmittedData'>
                        <div>
                            <div className='heading'>
                                <h2>Your Sharing Url is here </h2>
                            </div>
                            <div className='sortURL'>
                                
                                <NavLink to={`/aitxt${baseurl}`} target="_blank">https://toolshub.netlify.app/aitxt{baseurl}</NavLink>
                                <button onClick={handleCopy} >Copy</button>
                            </div>
                        </div>
                        <div>
                            <div className='heading'>
                                <h2>Your Content</h2>
                            </div>
                            <div className='returnContent'>
                                <code>{txt}</code>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CreateComponents