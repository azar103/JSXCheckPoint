import React from 'react';
import './style.css';
import myImg from './imageInSrc.jpg'
function App() {
  return (
   <>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>  
  
        <h1 className="title red">Your name here</h1>  
  
            <br />  
  
              <img src={myImg} /> <br /> 
  
              <img src="/imageInPublic.jpg" />  
  
     </div>  
  
      <video width="320" height="240" controls>  
  
          <source src="myVideo.mp4" type="video/mp4" /> 
  
      </video> 
   </>  
  );
}

export default App;
