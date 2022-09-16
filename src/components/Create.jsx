import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [input,setInput] =useState({
        title:"",
        body:"",
        author:""
    })
    const navigate=useNavigate()
    const [isPending,setIsPending]=useState(false)
    const inputHandler=(e)=>{
        const {name,value}= e.target
       setInput({...input ,[name]:value})
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)

    fetch('http://localhost:8200/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    }).then(() => {
      alert('new blog added');
       setIsPending(false)
       navigate("/")
    })
  }
  return (
    <div
    className='create'
    >
        <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={input.title}
          name='title'
          onChange={inputHandler}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={input.body}
          name='body'
          onChange={inputHandler}        ></textarea>
        <label>Blog author:</label>
        <select
          value={input.author}
          onChange={inputHandler}
          name='author'
        >
          <option value="Akshay Saini">Akshay Saini</option>
          <option value="dev">Dev</option>
        </select>
       {!isPending && <button>Add Blog</button>}
       {isPending && <button>Add Blog ...</button>}
      </form>
    </div>
  )
}
