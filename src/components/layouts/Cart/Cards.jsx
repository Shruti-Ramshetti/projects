import React from "react";
import courses from "../Pages/data";
import './Cards.css';


const Cards =(props)=>{
    return(

      <div>
      <h1 style={{textAlign:"left"}}>TRENDING COURSES</h1>
    <div className="Courselist">
      {props.coursedetails.map((course)=>(
        <div key={course.id} className="course-item">
          <h3>COURSE NAME : {course.subject}</h3>
          <h3>COURSE CATEGORY : {course.category}</h3>
          <h3>COURSE FEES : {course.fees}</h3>
          <h3>COURSE DURATION : {course.duration}</h3>
        </div>

      ))}
    </div>
    </div>
         
    )
}
export default Cards;