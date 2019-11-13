import React,{Component} from 'react';
import Banner from './components/banner2';
import Header from './components/header';
import Footer from './components/footer';
import HeadContent from './components/headContent';
import Thumbnail2 from './components/thumbnail2';


class Search extends Component {

  state = {
    detailAll:{}
  }

  fetchDetailAll = async(keyword,type) => {
    
    if(type === "letter") {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+keyword);
      const data = await response.json();
      this.setState({detailAll:data});
    } else if(type === "word") {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+keyword);
      const data = await response.json();
      this.setState({detailAll:data});
    } else if(type === "cate") {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+keyword);
      const data = await response.json();
      this.setState({detailAll:data});
    }

  }

  componentDidMount = () => {

    const {match} = this.props;
    const keyword = match.params.keyword;
    const type = match.params.type;
    this.fetchDetailAll(keyword,type);
  
  }

  render() {

    const {match} = this.props;
    const keyword = match.params.keyword;
    const type = match.params.type;
    const {switchFave,fave} = this.props;
    
    let headBox = "";

    if(type === "letter") {
      headBox = "Search By Letter : "
    } else if(type === "word") {
      headBox = "Search By Word : "
    }  else if(type === "cate") {
      headBox = "Search By Category : "
    }  

    

    return (
      <div className="App">

        <div className="wrapper">

          <div className="container">

            <Header />

            <Banner />

            <HeadContent desc={headBox} keyword={keyword} />

            <div className="row">
            
              <div className="col-12">

              {("drinks" in this.state.detailAll) ? <Thumbnail2 thumbs={this.state.detailAll} switchFave={switchFave} fave={fave}  />: ""}

              </div>
            
            </div> {/* row */}

            <Footer />
          
          </div>

        </div>

      </div>
    );

  }

}

export default Search;
