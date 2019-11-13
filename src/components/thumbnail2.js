import React from 'react';
import { Link } from 'react-router-dom';
import Fave from './fave';

const Thumbnail2 = (props) => {

  let drinks = props.thumbs.drinks;
  let showThumb;
  const {fave,switchFave} = props;
  const faveId = fave.map(f => f.idDrink);
  
  if(drinks === null) {
     showThumb = "";
  } else {
      showThumb = drinks.map((item,key) => {
       
      if(item.strDrinkThumb !== null) {

        const actived = faveId.includes(item.idDrink);

        return (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={key}>
            <Link to={"/detail/"+item.idDrink}>
              <div className="pic-show">
                <img src={item.strDrinkThumb} alt={item.strDrink} />
                <Fave switchFave={switchFave} item={item} actived={actived}  /> 
              </div>
              <div className="pic-title">{item.strDrink}</div>
            </Link>
          </div>
        )
      }

    });
  }
    
  return(
    <div className="thumbnail-group -style-1">
      <div className="row">
        {showThumb}
      </div> 
    </div>
  );

}
  


export default Thumbnail2;

