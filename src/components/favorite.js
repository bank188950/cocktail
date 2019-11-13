import React from 'react';
import { Link } from 'react-router-dom';

const Favorite = (props) => {

  const fave = {props}
  const index1 = props.fave.length-2;
  const index2 = props.fave.length-1;

  let faveShow1 = "";
  if(index1 >= 0){
    faveShow1 = (
     <div className="col-6">
      <Link to={"/detail/"+props.fave[index1].idDrink}>
        <div className="pic-show">
          <img src={props.fave[index1].strDrinkThumb} alt={props.fave[index1].strDrink} />
        </div>
        <div className="pic-title">{props.fave[index1].strDrink}</div> 
      </Link>  
    </div>)
  }

  let faveShow2 = "";
  if(index2 >= 0){
    faveShow2 = (
     <div className="col-6">
      <Link to={"/detail/"+props.fave[index2].idDrink}>
        <div className="pic-show">
          <img src={props.fave[index2].strDrinkThumb} alt={props.fave[index2].strDrink} />
        </div>
        <div className="pic-title">{props.fave[index2].strDrink}</div> 
      </Link>  
    </div>)
  }

  return (
    <div className="pic-sect -sect-style2">
                
      <h2 className="pic-head">Favorite Latest</h2>

      <div className="pic-box">
        <div className="row">
          {faveShow1}
          {faveShow2}
        </div>
      </div>

      <div className="pic-manage">
      <Link to={"/favorite"}>More <span>»</span></Link>
      </div>

    </div>
  );

}


export default Favorite;