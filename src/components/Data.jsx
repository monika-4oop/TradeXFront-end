import React from 'react';
import '../App.css';


export const Data = ({user}) => {
  console.log("Data" , user);
  return (
   
    <div className = 'data ' >
      <div className = 'data1 row'>
        <div className="col-md-3 col-sm-12">
        <div>
        <img className = 'images' src={user.links.mission_patch}/>
        </div>

        <div className="text">
        <p style={{align:"center"}}>ID:{user.flight_number}</p>  
        <p>Mission ID:{user.mission_id}</p>  
        <p>Lunch year:- {user.launch_year}</p>  
        <p>Lunch success:- { String( user.launch_success) }</p> 

        </div>
        </div>
        </div>
    
    </div>
  )
}
