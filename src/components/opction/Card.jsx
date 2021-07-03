import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ imageSource, title }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img type="button" src={imageSource} alt="a wallpaper" className= "card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body text-light">
      <p className={" btn btn-primary my-3 mx-2"}>lista </p>
      </div>
    </div>
    
  );
  
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;