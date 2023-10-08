import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText] = useState("");
    const handleUpClick = ()=>{
        if(text===""){
            props.showAlert("No text is available!","danger");    
        }
        else{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to upper case!","success");
        }
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        if(text===""){
            props.showAlert("No text is available!","danger");    
        }
        else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lower case!","success");
        }
    }
    const handleSTClick = ()=>{
        let newText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, dicta ducimus? Sint accusamus sequi ea dolorum rem, nobis alias labore voluptatem, cupiditate consequuntur ratione suscipit libero autem esse. Et rem dolorem sequi, fuga architecto perferendis necessitatibus iste consequuntur, explicabo incidunt laboriosam nesciunt voluptatum eveniet delectus! Unde, aliquam repellendus! Accusantium natus atque iste aliquam cum, eos tempora fugit quae quis saepe iusto nihil est perferendis distinctio aspernatur nisi rerum consectetur similique magnam vel doloremque voluptas excepturi! Sed ad amet excepturi placeat, nesciunt ut perferendis consectetur. Animi accusamus a porro inventore quam, fuga rem quos, assumenda accusantium ratione architecto ad atque dolore?";
        setText(newText);
        props.showAlert("Added sample text!","success");
    }
    const handleClearClick = ()=>{
        if(text===""){
            props.showAlert("No text is available!","danger");    
        }
        else{
            setText("");
            props.showAlert("Text cleared!","success");
        }
    }
    const handleCopyText = () =>{
        if(text===""){
            props.showAlert("No text is available!","danger");    
        }
        else{
            let text = document.getElementById("Textarea");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copied!","success");
        }
    }
    const handleRemoveExtraSpaces = () =>{
        if(text===""){
            props.showAlert("No text is available!","danger");    
        }
        else{
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert("Removed extra spaces in the text!","success");
        }
    }
    return ( 
    <div className={`container bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
        <div className={`container bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
            <div className="mb-3">
            <h4><label htmlFor="Textarea" className={`form-label my-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</label></h4>
            <textarea className={`form-control form-control-sm bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} onChange={handleChange} id="Textarea" rows="15" value={text} placeholder='Enter your text'></textarea>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>To Upper Case</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>To Lower Case</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleSTClick}>Sample Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra spaces</button>
            <button className="btn btn-primary my-2 mx-2 btn-danger" onClick={handleClearClick}>Clear Text</button>
            </div>
        </div>
        <div className={`container bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
            <p><b>Text Summary</b></p>
            <p onChange={handleChange}>Number of Characters: {text.trim().length}</p>
            {/* <p onChange={handleChange}>Number of Words: {text.trim()===""?text.trim().length:text.split(/[ ]+/).length}</p> */}

            {/* Code from youtube. - works better. mine sucks */}
            <p onChange={handleChange}>Number of Words: {text.trim() === '' ? 0 : text.match(/\S+/g).length}</p>
        </div>
    </div>
  );
}
