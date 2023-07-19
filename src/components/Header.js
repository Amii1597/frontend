import React, { useState } from 'react'
import '../styles/Header.css'
import Register from './Register';
import Login from './Login';
const Header = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const closeModal = () => setShowModal(false);
  const closeModal2 = () => setShowModal2(false);
  return (
  <>
    <div className="header_contianer">
        <h1 className='heading_header'>Swip Tory</h1>
        <div className="button_Rs">

    
        <button className="Register" onClick={() => setShowModal(true)}>
        Register Now
          </button>
          {showModal && <Register closeModal={closeModal} />}

        <button className="Sign" onClick={() => setShowModal2(true)}>
        Sign In
          </button>
          {showModal2 && <Login closeModal2={closeModal2} />}
      
        </div>
    </div>
  </>
  )
}

export default Header