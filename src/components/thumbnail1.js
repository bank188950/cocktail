import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Fave from './fave';

class Thumbnail1 extends Component {

  render() {

    const {thumbs,fave,switchFave} = this.props;
    const faveId = fave.map(f => f.idDrink);

    var showThumb = thumbs.drinks.slice(0, 8).map((item,key) => {

      const actived = faveId.includes(item.idDrink);

      return (
        <div className="col-6 col-sm-4 col-md-3" key={key}>
          <Link to={"/detail/"+item.idDrink}>
            <div className="pic-show">
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <Fave switchFave={switchFave} item={item} actived={actived}  /> 
            </div>
            <div className="pic-title">{item.strDrink}</div> 
          </Link>
        </div>
      )
    });

    return(
      <div className="thumbnail-group">
        <div className="row">
        {showThumb}
        </div>
      </div>  
    );

  }


}


export default Thumbnail1;