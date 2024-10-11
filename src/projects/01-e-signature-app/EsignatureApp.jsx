
import React, {useState} from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
  const [name, setName]=useState("");
  const [date, setDate]=useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".45rem 0",
  }
  document.body.style.background = "#eee";
  return (
    <div className='container text-center'>
        <Title classes={"title"} text={!name ? "Name": name}/>
        <Title classes={"main-title mb-4"} text={!date ? " DoB" : date}/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint at aspernatur esse magni amet. Laborum quae hic tempore numquam id, dolorum provident debitis. Officia id, eveniet soluta quibusdam impedit placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio, tenetur, voluptates dolore dicta non illum placeat officiis eos quidem neque nisi. Dignissimos laborum possimus, recusandae adipisci enim molestiae iusto?</p>
        
        <footer className="d-flex" 
        style={{
        justifyContent: "space-around", 
        position: "relative", 
        top: "40vh",
      }}
      >
          <input type="date" value={date} style={inputStyle}  onChange={handleDateChange} />
          <input type="text" value={name} style={inputStyle} onClick={handleNameChange} onChange={handleNameChange} />
        
        </footer>
    </div>
  )
}
