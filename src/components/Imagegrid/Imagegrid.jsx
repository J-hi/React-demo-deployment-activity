import React from 'react'

import './Imagegrid.css'

const Imagegrid = ({url}) => {
  return (
    <div className='col-lg-2 col-md-2 col-sm-12 d-flex flex-column ' style={{height:"150px"}}>
      <div className='grid-img' style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center", height: '300px', borderRadius:'15px' }} ></div>
    </div>
  );
}

export default Imagegrid;
