import React from "react";
import closevector from "../../assets/Vector.svg";
import "./../../styles/Header.css";
const StoryitemAdd = ({ closeModal }) => {
  return (
    <>
      <form method="POST">
        <div className="modal-wrapper"    onClick={closeModal}></div>
        <div className="modal-container" >
          <div className="login_box" style={{height:500,width:500}}>
            <img
              src={closevector}
              alt=""
              className="closevector2"
              onClick={closeModal} style={{marginLeft:100}}
            />
            <br />
            <div className="slides" style={{marginTop:30}}>
              <button className="slide1" style={{margin:10}}><b>Slide 1</b></button>
              <button className="slide1" style={{margin:10}}><b>Slide 2</b></button>
              <button className="slide1" style={{margin:10}}><b>Slide 3</b></button>
              <button className="slide1" style={{margin:10}}><b>Slide 4</b></button>
              <button className="slide1" style={{margin:10}}><b>Add+</b></button>
            </div>
            <label>
              {" "}
            <b>Heading</b>  {" "}
              <input type="text" placeholder="Your Heading" style={{marginLeft:30, marginTop:20, width:300}}/>
            </label>
            <br />
            <br />
            <label>
              {" "}
             <b>Description</b>{" "}
              <input type="text" placeholder="Story Description" style={{marginLeft:10, height:90,width:300}} />
            </label>
            <br />
            <br />

            <label>
              {" "}
             <b>Image</b>{" "}
              <input type="text" placeholder="Add Iamge url" style={{marginLeft:40,width:310}}/>
            </label>
            <br />
            <br />
            <label>
              {" "}
          <b>Category</b>{" "}
              {/* <input type="text" placeholder="Select category" style={{marginLeft:20,width:300}} /> */}
              <select placeholder="Select Category" style={{marginLeft:20,width:320, height:40}} >
                <option>Food</option>
                <option>Movies</option>
                <option>Education</option>
                <option>Medical</option>
              </select>
            </label>
            <br />
            <br />
            <div className="allthebtn" style={{display:"flex"}}>
              <button className="Previous" style={{margin:20}}>Previous</button>
              <button className="Next" style={{margin:20}}>Next</button>
              <button className="Post" style={{margin:20,marginLeft:60}}>Post</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default StoryitemAdd;
