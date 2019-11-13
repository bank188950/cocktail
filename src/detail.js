import React, {Component} from 'react';
import Banner from './components/banner';
import Header from './components/header';
import Footer from './components/footer';
import HeadContent2 from './components/headContent2';
import LargePic from './components/largePic';
import Ingredient from './components/ingredient';


class Detail extends Component {

  state = {
    detailOne:{}
  }

  fetchDetailOne = async(id) => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id);
    const data = await response.json();
    this.setState({detailOne:data});
  }

  componentDidMount = () => {
    const {match} = this.props;
    const id = match.params.id;
    this.fetchDetailOne(id);
  }

  render() {

    const {drinks} = this.state.detailOne;

    return (
      <div className="App">

        <div className="wrapper">

          <div className="container">

            <Header />

            <Banner />

            <HeadContent2 />

            <div className="row">
            
              <div className="col-12 col-md-8 col-lg-6">
                  
                {(drinks != undefined)?<LargePic path={drinks[0]} />:""}

              </div>
                
              <div className="col-12 col-md-4 col-lg-6">
                {(drinks != undefined)?<Ingredient detail={drinks[0]} />:""}
              </div>

            </div> {/* row */}

            <Footer />
          
          </div>

        </div>

      </div>
    );

  }

}

export default Detail;
