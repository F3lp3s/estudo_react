import React from "react";

const FilmeCard = ({ filme1 }) => {
  return(
    <div className="movie">
      <div>
        <p>{filme1.Year}</p>
      </div>
      <div>
        <img src={filme1.Poster !== 'N/A' ? filme1.Poster : 'https://via.placeholder.com/400'} alt={filme1.Title} />
      </div>
      <div>
        <span>{filme1.Type}</span>
        <h3>{filme1.Title}</h3>
      </div>
    </div>
  )
}

export default FilmeCard;