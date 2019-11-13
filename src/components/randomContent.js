import React from 'react';
import { Link } from 'react-router-dom';
import Fave from './fave';

const RandomContent = (props) => {

  const {drinks} = props.thumbs;
  const {switchFave, fave} = props;

  const actived = fave.includes(drinks[0]);

  return(
    <div className="pic-sect -sect-style1">
                    
      <h2 className="pic-head">Ramdom Show</h2>
      
      <div className="pic-box">
        <div className="row">
          <div className="col-12">
            <Link to={"/detail/"+drinks[0].idDrink}>
              <div className="pic-show">
                <img src={drinks[0].strDrinkThumb} alt={drinks[0].strDrink} />
                <Fave switchFave={switchFave} item={drinks[0]} actived={actived}  /> 
              </div>
              <div className="pic-title">{drinks[0].strDrink}</div> 
            </Link>
          </div>
        </div>
      </div>

    </div>
  );

}
  


export default RandomContent;