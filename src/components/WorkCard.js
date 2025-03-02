import React ,{useState} from 'react';

import "./WorkCardStyles.css";

import { NavLink } from 'react-router-dom';
  

const WorkCard = (props) => {
  const [isFullTextVisible, setFullTextVisible] = useState(false);

  const toggleFullText = () => {
    setFullTextVisible(!isFullTextVisible);
  };
  return (
  <div className="project-container">
    <div className="project-card">
        <img src={props.imgsrc} alt="Project-img" />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
        {isFullTextVisible ? (
          <p>{props.text}</p>
        ) : (
          <p>
            {props.text.slice(0, 100)} {/* Display the first 100 characters */}
            {props.text.length > 100 && !isFullTextVisible && (
              <span>
                ...
                <button onClick={toggleFullText} className="read-more-btn">
                  Read More
                </button>
              </span>
            )}
          </p>
        )}
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  </div>
  )
}

export default WorkCard;
