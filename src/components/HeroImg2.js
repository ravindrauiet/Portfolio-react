import React from 'react'

import "./HeroImg2Styles.css";


// class HeroImg extends component{render(){return(......)}}
const HeroImg2 = (props) => {
  return (
    <div className="hero-img" >
      <div className="heading">
        <h1>{props.heading}</h1>
        {/* <h1>{this.props.heading}</h1> */}
        <p>{props.text}</p>
        {/* <p>{this.props.text}</p> */} 
      </div>
    </div>
  )
}


export default HeroImg2
