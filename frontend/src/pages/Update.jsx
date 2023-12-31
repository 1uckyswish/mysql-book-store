import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
    const [book, setBook] = useState({
        title:'',
        desc:'',
        price:null,
        cover:''
    });

    const navigate = useNavigate();
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];

    const handleChange = (e)=>{
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/books/${bookId}`, book);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input type="text" placeholder="Title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="Desc" onChange={handleChange} name="desc"/>
      <input type="text" placeholder="Price" onChange={handleChange} name="price"/>
      <input type="text" placeholder="Cover" onChange={handleChange} name="cover"/>

      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  );
}

export default Update;
