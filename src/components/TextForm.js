import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = ()=>{
        setText("")
    }
    const  handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text= 'akash';
    // setText("akash");
    return (
        <>
       <div className='container' style={{color:props.mode ==="dark"?"white":"#1e272e"}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'#1e272e', color: props.mode ==="dark"?"white":"#1e272e"}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn-btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn-btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
            <button className="btn-btn-primary mx-2" onClick={clearText} >Clear Text</button>
       </div>
       <div className='container my-2' style={{color:props.mode ==="dark"?"white":"#1e272e "}}>
            <h2> Your Text Summery</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes require to read</p>
            <h2>Preview</h2>
            <p>{text ===""?'Enter text in Textarea for preview': text}</p>
       </div>
        </> 
    )
}

export default TextForm
