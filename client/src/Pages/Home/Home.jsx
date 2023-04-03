import React from 'react';
import '../../App.css';
import LeftSidebar from'../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';

function Home() {
  return (
    <div className='home-container-1'>
     <LeftSidebar />
     <div className= 'home-container-2'>
     <RightSidebar />
     <HomeMainbar />
     </div>
    </div>
  )
}

export default Home;