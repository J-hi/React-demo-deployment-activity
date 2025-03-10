import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Favsec.css'
import Imageholder from '../Imageholder/Imageholder';

const Favsec = () => {

   const changeback = useNavigate();
   const tohome = () => {
   changeback('/'); 
   };

  return (
      <div>
        <div className='container-fluid favsec mt-4 text-center position-relative'>
                <div>
                <button onClick={tohome} style={{position:'absolute', left:'20px'}}>Back to Home</button>
                <h1>My Favourite Places In Jodhpur</h1>
                </div>
                <div className='row favsecrow mt-4'>
                    <Imageholder url='https://www.travelescape.in/wp-content/uploads/2017/07/Jodhpur-1-www_mouthshut_com.jpg' title='MEHRANGARH FORT' description='One of the largest forts in India, Mehrangarh stands tall on a hill, offering stunning panoramic views of the Blue City. It houses a museum showcasing royal artifacts, paintings, and weapons.' />
                    <Imageholder url='https://aroyalaffair.in/wp-content/uploads/2020/01/umaid-bhawan-palace-jodhpur-atul-pratap-chauhan-photography-an-overview-external.jpg' title='UMAID BHAWAN PALACE'             description='A magnificent palace that serves as a museum, luxury hotel, and royal residence. Its grand architecture and well-preserved history make it a must-visit spot.'/>
                    <Imageholder url='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/49/39/6c/jaswant-thada.jpg?w=1200&h=1200&s=1' title='JASWANT THADA'     description='A beautiful marble cenotaph built in memory of Maharaja Jaswant Singh II. Surrounded by serene gardens, it is an architectural masterpiece with intricate carvings and a peaceful ambiance.'/>
                </div>
        </div>
      </div>
  )
}

export default Favsec
