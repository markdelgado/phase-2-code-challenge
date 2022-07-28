import React, {useState} from "react";

function Planeteer({planeteer}) {
const[isbio, setIsBio] = useState(false)

const handleClick = () => {
  setIsBio(isBio => !isbio)
  
}
 

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={handleClick}
         // onClick={(isBio) => !isbio(false)}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{isbio ? (planeteer.bio) : (planeteer.quote)}</p>
          <div className="card__detail">
            <p>{planeteer.twiiter}</p>
            <p>
              { planeteer.fromUSA ? (
                <p>USA-based </p> ): (<p>Working overseas</p>)
          
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
