import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate=useNavigate()
  return (
     <>
     <button className='go-back-button' onClick={()=>{
         navigate("/")
     }} >Go Back</button>
    <div >
   <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?w=2000" alt="" />
    </div>
    </>
  )
}
