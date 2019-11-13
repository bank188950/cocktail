import React,{Component} from 'react';
import Banner from './components/banner';
import Header from './components/header';
import Footer from './components/footer';
import Filter1 from './components/filter1';
import Filter2 from './components/filter2';
import Thumbnail1 from './components/thumbnail1';
import RandomContent from './components/randomContent';
import Favorite from './components/favorite';

class Home extends Component {

  state = {
    thumbnail1:{},
    thumbnailRandom:{},
    inputSearch: "",
    selectSearch: "",
  }

  fetchThumbnail1 = async() => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();
    this.setState({thumbnail1:data});
  }

  fetchRandom = async() => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    this.setState({thumbnailRandom:data});
  }

  componentDidMount = () => {
    
    this.fetchThumbnail1();
    this.fetchRandom();
  }

  handleInput = (event) => {
    const value = event.target.value;
    this.setState({inputSearch:value});
  }

  handleSelect = (event) => {
    const value = event.target.value;
    this.setState({selectSearch:value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const inputTxt =  this.state.inputSearch;
    const inputSelect =  this.state.selectSearch

    if(inputTxt != ""){
      this.props.history.push('/search/word/'+inputTxt);
    } else if(inputSelect != "") {
      this.props.history.push('/search/cate/'+inputSelect);
    }

  }

  

  render() {

    const {switchFave,fave} = this.props;

    return (
      <div className="App">

        <div className="wrapper">

          <div className="container">

            <Header />

            <Banner />

            <Filter1 handleInput={this.handleInput} handleSelect={this.handleSelect} handleSubmit={this.handleSubmit} />

            <div className="row">
            
              <div className="col-12 col-lg-8">

                {("drinks" in this.state.thumbnail1)?<Thumbnail1 thumbs={this.state.thumbnail1} switchFave={switchFave} fave={fave} />:""}
                  
                <Filter2 />

              </div>
                
              <div className="col-12 col-lg-4">
                  
                {("drinks" in this.state.thumbnailRandom)?<RandomContent thumbs={this.state.thumbnailRandom} switchFave={switchFave} fave={fave} />:""}  
                
                <Favorite fave={fave}   />

              </div>

            </div> {/* row */}

            <Footer />

          </div>

        </div>
        
      </div>
    )
  }
}

export default Home;
