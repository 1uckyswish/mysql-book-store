import React, { useState } from "react";

function Add() {
    const [book, setBook] = useState({
        title:'',
        desc:'',
        price:null,
        cover:''
    });

    const handleChange = (e)=>{
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            
        } catch (error) {
            
        }
    };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input type="text" placeholder="Title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="Desc" onChange={handleChange} name="desc"/>
      <input type="text" placeholder="Price" onChange={handleChange} name="price"/>
      <input type="text" placeholder="Cover" onChange={handleChange} name="cover"/>

      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Add;
