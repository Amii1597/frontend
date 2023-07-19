import './App.css';
import { Route, Routes } from "react-router-dom";  
import React, { Component} from 'react';

// import Stories from 'react-insta-stories';
import Home from './components/Home';
import AfterHeader from './components/AfterLogin/AfterHeader';
// import StoryitemAdd from './components/AfterLogin/StoryitemAdd';
// import Home from './components/Home';

function App() {
  // const stories = [
  //   'https://thumbs.dreamstime.com/b/italian-food-background-variety-ingredients-over-slate-35112782.jpg',
  //   {
  //     url: 'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=',
  //     duration: 5000,
      
  //   },
  //   {
  //     url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg',
  //     duration: 2000,
  //     seeMore: ({ close }) => {
  //       return <div onClick={close}>Hello, click to close this.</div>;
  //     },
  //   },
  // ];
  return (
    <>
   <Routes>
    <Route path="/" element={<Home />}/>
<Route path='/AfterHeader' element={<AfterHeader/>}/>
{/* <Route path='/StoryitemAdd' element={<StoryitemAdd/>}/> */}

   </Routes>


		{/* <Stories
			stories={stories}
			defaultInterval={1500}
			width={232}
			height={468}
		/> */}
	
    </>
  );
}

export default App;
