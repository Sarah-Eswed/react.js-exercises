import React from 'react';
import './MyClass.css';




const myclass = (props) =>{
return(

  <div className="Card">
<img src={props.src1} alt={props.alt1} className="Galaxy"></img>
<img src={props.src} alt={props.alt} className="User" /> 
<h2>{props.name}</h2>
<p>{props.place}</p>
<h4>Front-End Web Developer</h4>
<p>{props.disc}</p>
<a href={props.facebook} ><i className="fab fa-facebook-f"></i></a>
<a href={props.linkedIn} ><i className="fab fa-linkedin"></i></a>
<a href={props.gitHup}  ><i className="fab fa-github"></i></a>
  
  </div>
) 


}

export default myclass;