import React from 'react';

const Card = ({country}) => {
  
  return (
    <li className="card">
      <img src={country.flags.svg} alt={"drapeau + country.translations.fra.common"} />

      <div className="data-container">
        <ul>
          <li>{country.translations.fra.common}</li>
          <li>{country.capital}</li>
          <li>Pop. {country.population.toLocaleString()}</li>
        </ul>
      </div>

    </li>
  );

};

export default Card;