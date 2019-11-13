import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Banner from './components/banner2';
import Header from './components/header';
import Footer from './components/footer';
import HeadContent3 from './components/headContent3';
import Fave from './components/fave';


class Favoreite extends Component {

  render() {

    const {fave,switchFave} = this.props;
    const faveId = fave.map(f => f.idDrink);
    

    let showFave;

    if(fave.length > 0) {
      showFave = fave.map((item,key) => {

        const actived = faveId.includes(item.idDrink);

        return (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={key}>
            <Link to={"/detail/"+item.idDrink}>
            <div className="pic-show">
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <Fave switchFave={switchFave} item={item} actived={actived} /> 
            </div>
            <div className="pic-title">{item.strDrink}</div> 
            </Link>
          </div>
        );

      })
    } else {
      showFave = "";
    }
    
    return (
      <div className="App">

        <div className="wrapper">

          <div className="container">

            <Header />

            <Banner />

            <HeadContent3 />

            <div className="row">
            
              <div className="col-12">

                <div className="thumbnail-group -style-1">

                  <div className="row">

                    {showFave}

                  </div> {/* row */}

                </div>

              </div>

            </div>

            <Footer />
          
          </div>

        </div>

      </div>
    );

  }

}

export default Favoreite;
