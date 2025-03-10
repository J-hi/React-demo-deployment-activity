import React from "react";

const Imageholder = ({ url, description, title }) => {
  return (
    <div className='col-lg-4 col-md-3 col-sm-12 d-flex flex-column '>
      <div style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center", height: '280px', borderTopRightRadius:'20px', borderTopLeftRadius:'20px', border: '2px solid white', borderBottom:'0' }} ></div>
      <div className="text-center" style={{borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px', border: '2px solid white'}}> 
        <p className="text-center">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Imageholder;
