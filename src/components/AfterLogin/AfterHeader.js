import React, {  useState } from 'react'
import StoryContianer from '../Story/StoryContianer'
import TopStory from '../Story/TopStory'
import './../../styles/AfterHeader.css'
import profile from '../../assets/profile.png'
import StoryitemAdd from './StoryitemAdd'
import { useNavigate } from 'react-router-dom'
// import { CgMenu, CgCloseR} from 'react-icons/cg'
const AfterHeader = () => {
  // const [openMenu,setOpenMenu]=useState(false)
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const handleLogout = async(e)=>{
    e.preventDefault();
    const res = await fetch('https://backendstory.onrender.com/logout',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
        
      },
      credentials:"include"
    })
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else{
    
      navigate("/")
    }
  }
//   const callAboutPage=async()=>{
// try{
//   const res = await fetch('http://localhost:5000/about',{
//     method :"GET",
//     headers:{
//       Accept:"application/json",
//       "Content-Type" : "application/json"
//     },
//     credentials: "include"
//   });
//   const data = await res.json();
//   console.log(data);
//   if(!res.status ===200){
//     const error=new Error(res.error);
//     throw error;
//   }
// }catch(err){
// console.log(err);
// }
//     }
//   useEffect(()=>{
//     callAboutPage();
//   },[]);
  return (
    <>
   {/* <form method='GET'> */}
   <div className="afterheader">



 
   <button className="Bookmarks">Bookmarks</button>


<button className="addstory" onClick={() => setShowModal(true)}>Add story</button>
{showModal && <StoryitemAdd closeModal={closeModal} />}

 

   <button className="logout"  onClick={handleLogout}>Logout</button>
   <img src={profile} alt="" className="profile" />
 
   <h1 className='heading_header'>Swip Tory</h1>
   {/* <div className="mobile_navbar">
<CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=>setOpenMenu(true)}/>
<CgCloseR name='close-outline' className='close-outline mobile-nav-icon' onClick={()=>setOpenMenu(false)}/>
   </div> */}
   </div>
   <StoryContianer/>
   <br /><br />
<b className='heading_homepage'>Top Stories About food</b>
<TopStory/>
<br /><br />
<button className="see_more">See More</button>
   {/* </form> */}
    </>
  )
}

export default AfterHeader