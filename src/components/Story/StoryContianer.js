import React, { useState } from 'react'
import './../../styles/Story.css'
import movie from './../../assets/movie.jpg'
import fruits from './../../assets/fruits.jpg'
import education from './../../assets/Education.jpg'
import medical from './../../assets/medical.png'
import ItemBystory from './ItemBystory'
import ItemFood from './ItemFood'
import ItemEducation from './ItemEducation'
import Itemmedical from './Itemmedical'
const StoryContianer = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [showModal1, setShowModal1] = useState(false);
  const closeModal1 = () => setShowModal1(false);
  const [showModal2, setShowModal2] = useState(false);
  const closeModal2 = () => setShowModal2(false);
  const [showModal3, setShowModal3] = useState(false);
  const closeModal3 = () => setShowModal3(false);
  return (
      <>
    <div className="story_body">
        <div className="story_contianer">
          <img src={movie} alt="" className="movie"  onClick={() => setShowModal(true)} />
          {showModal && <ItemBystory closeModal={closeModal} />}
        </div>
        <div className="story_contianer">
        <img src={medical} alt="" className="medical" onClick={() => setShowModal1(true)} />
        {showModal1 && <Itemmedical closeModal1={closeModal1} />}
        </div>
        <div className="story_contianer">
        <img src={education} alt="" className="education" onClick={() => setShowModal2(true)} />
        {showModal2 && <ItemEducation closeModal2={closeModal2} />}
        </div>
        <div className="story_contianer">
        <img src={fruits} alt="" className="fruits" onClick={() => setShowModal3(true)}/>
        {showModal3 && <ItemFood closeModal3={closeModal3} />}
        </div>
   
    </div>
      </>
   
  )
}

export default StoryContianer