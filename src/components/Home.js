import React from 'react'
import Header from './Header'
import StoryContianer from './Story/StoryContianer'
import TopStory from './Story/TopStory'




const Home = () => {
    
  return (
<>
    <Header/>
<StoryContianer/>
<br /><br />
<b className='heading_homepage'>Top Stories About food</b>
<TopStory/>
<br /><br />
<button className="see_more">See More</button>
</>
  )
}

export default Home