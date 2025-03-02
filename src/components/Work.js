import React from 'react';

import "./WorkCardStyles.css";
import WorkCard from './WorkCard';
import WorkCardData from './WorkCradData';


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">projects</h1>
        <div className="project-Container">
            {WorkCardData.map((val,ind)=>{
                return (
                  <div className="project-card">
                    <WorkCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} source={val.source} />
                  </div>
                );
            })}
        </div>
    </div>
  )
}

export default Work
