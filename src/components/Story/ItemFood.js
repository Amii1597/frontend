import React, { useEffect, useState } from "react";
import Stories from 'react-insta-stories';
import axios from "axios";

const ItemFood = ({closeModal3}) => {
      // const heading1= [
   
  //   {
     
  //     duration: 5000,
  //     seeMore: ({ close }) => {
  //       return <div onClick={close}>Hello, click to close this.</div>;
  //     },
  //   },
  // ];
  const [products, setProducts] = useState([]);
  //   const Refreshpage=()=>{
  // window.location.reload(false);
  //   }
  
    useEffect(() => {
      axios
        .get("https://backendstory.onrender.com/addstoryfood")
  
        .then((res) => {
          setProducts(res.data);
         
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <>
         <form method="GET">
     <div className="modal-wrapper" onClick={closeModal3}></div>
      
      <div className="modal-container">
      {
      products.map((elm)=>{
        const {  heading,
      description,
      image,
      }=elm;
        return(
          <>

         <div className="backset">

    <div className="product_imgname">
    {/* <img src={image} alt="product" className="product_img" /> */}
    
		 <Stories 
     className="story_set"
			stories={image }
			defaultInterval={3000}
			width={200}
			height={468}
      heading ={heading}
      
		/> 
        <h1 className="product_companyname">{heading}</h1>
        </div>
        <div className="product_details">
        <div className="descomm">

          <p className="product_description">
            {description.length >= 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
          
      {/* 16<img src={comment} className="comment_img" onClick={commentpage}/> */}
        </div>
        
     
    </div>
         </div>
   


   
          </>
          )
      })
    }
      </div>
     </form>
    </>
  )
}

export default ItemFood