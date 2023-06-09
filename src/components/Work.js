import "./WorkCardStyles.css";
import WorkCardData from "./WorkCardData"
import React from 'react'
import WorkCard from "./WorkCard";


export default function Work() {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        {WorkCardData.map((val,ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            );
        })}
    </div>
    </div>
  )
}
