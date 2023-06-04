import React, { useState } from 'react';
import './WordCount.css'

function WordCount() {
    const [TotalCount, setTotalCount] = useState("")
    const [inputText, setInputText] = useState("")

    const CountWord = (event) => {
        event.preventDefault()
        const word = event.target[0].value
        setInputText(word)
        // console.log(word)
        const splitWord = word.split(" ").filter((e) => e != "")
        setTotalCount(splitWord.length);
        // console.log(splitWord.length);
        event.target.reset()
    }


    return (
        <div className='wordCount'>
            <h1 className='wordCountHeading'>
                <p>Word Counter Tool</p>
                <p>
                    Efficient Analysis and Summary of Textual Content
                </p>
            </h1>
            <form className='wordCountInputForm' onSubmit={CountWord}>
                <textarea className='wordCountInput' type='textarea'
            
                    placeholder='paste You Text Here' />
                <button>Submit</button>
            </form>
            {TotalCount &&
                <>
                    <h3 className='resultCount'>The Total Word Count is {TotalCount}</h3>
                    <p className='resultText'>Your Text: {inputText}</p>
                </>

            }
            <p className='wordCountPera'>
                The word counter tool is a valuable utility that simplifies the analysis and summarization of text documents. By providing word frequencies and sorting them intelligently, it empowers users to quickly grasp the essence of a text, extract meaningful insights, and facilitate further analysis or decision-making processes. Whether for academic, professional, or personal use, the word counter tool is an indispensable asset for anyone dealing with textual data.
            </p>
        </div>
    )
}

export default WordCount