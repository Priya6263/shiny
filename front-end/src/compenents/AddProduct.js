import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = ()=>{
    const notify = () => toast.success('product is added!', {
        position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
        });
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false);
    
    const addProduct = async ()=>{
        //console.log(name,price,category,company);
        notify();
        if(!name||!price||!company||!category){
            setError(true);
            return false;
        }

        
        const userId = JSON.parse(localStorage.getItem('user'))._id ;
        // console.log(userId);
        let result =await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.log(result);
    }

    

    return(
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter product name" value={name}
                onChange={(e)=>{
                    setName(e.target.value);
                }}
            />
            {error&&!name&&<span className="invalid-input">Enter valid name</span>}
            <input className="inputBox" type="text" placeholder="Enter product price" value={price}
            onChange={(e)=>{
                setPrice(e.target.value);
            }}
            />
            {error&&!price&&<span className="invalid-input">Enter valid price</span>}
            <input className="inputBox" type="text" placeholder="Enter product category" value={category}
            onChange={(e)=>{
                setCategory(e.target.value);
            }}
            />
            {error&&!category&&<span className="invalid-input">Enter valid category</span>}
            <input className="inputBox" type="text" placeholder="Enter product company" value={company}
            onChange={(e)=>{
                setCompany(e.target.value);
            }}
            />
            {error&&!company&&<span className="invalid-input">Enter valid company</span>}
            <button onClick={addProduct} className="btn">ADD PRODUCT</button>
            <ToastContainer />
        </div>
    )
}
export default AddProduct;