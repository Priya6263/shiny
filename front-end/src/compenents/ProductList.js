import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let ProductList = ()=>{
    const [products,setProducts] = useState([]);


    useEffect(()=>{
        getProducts();
    },[])
    const getProducts = async ()=>{
        let result = await fetch("http://localhost:5000/products",{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProducts(result);
    }

let deleteProduct = async (id)=>{
    console.log(id);
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:'delete'
        });
        result = await result.json();
        if(result){
            getProducts();
        }
       
}

const searchHandle =async (e)=>{
    console.warn(e.target.value);
    let key = e.target.value;
    if(!key){
        getProducts();
    }
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result){
        setProducts(result)
    }
}

    console.log(products);
    return(
        <div className="product-list">
            <h3>Product list</h3>
            <input type="text" className="search" placeholder="search product "
            onChange={searchHandle}
            />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
               products.length>0? products.map((item,index)=>
                    <ul>
                <li>{index}</li>
                <li>{item.name}</li>
                <li>$ {item.price}</li>
                <li>{item.category}</li>
                <li>
                    <button onClick={()=>deleteProduct(item._id)}>DELETE</button>
                    <Link to={`/update/${item._id}`}>Update</Link>
                </li>
            </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}
export default ProductList;